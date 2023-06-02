import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

 

const app = express();
app.use(cors());
app.use(json());

 const db = createConnection({
  host: "localhost",
  user: 'root',
  password: "",
  database: 'miniprojet'
});



app.post('/sign', (req, res) => {
  const { name, email, password, code_barrau } = req.body;

  if (!code_barrau) {
    const sql3 = "INSERT INTO client (nom_cl,prenom_cl,email,password) VALUES (?, ?, ?,?)";
    const values3 = [
      req.body.name,
      req.body.prenom,
      req.body.email,
      req.body.password

    ];
    db.query(sql3, values3, (err, result) => {
      if (err) {
        return res.json({ Message: "Error in node.... " });
      }
      return res.json(result);
    });
  } else {
    const sql2 = "INSERT INTO avocat (code_barrau,nom_av,prenom_av,email,password) VALUES (?, ?, ?, ?)";
    const values2 = [
      req.body.code_barrau,
      req.body.name,
      req.body.prenom,
      req.body.email,
      req.body.password
    ];
    db.query(sql2, values2, (err, result) => {
      if (err) {
        return res.json({ Message: "Error in node.... " });
      }
      return res.json(result);
    });
  }
});







app.post('/log', (req, res) => {

  const sql = "SELECT * FROM avocat WHERE email= ?  and  password= ?";
  const values = [
    req.body.email,
    req.body.password
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.json({ Message: "Error in nodejjj.... " });
    if (result.length > 0) {
      const avocat = result[0];
      const code_barrau = avocat.code_barrau;  
      const nom = avocat.nom_av;
      const prenom = avocat.prenom_av;

      return res.json({ Login: true, UserType: 'avocat', code_barrau, nom, prenom });
    } else {
      const sql1 = "SELECT * FROM client WHERE email= ?  and  password= ?";
      db.query(sql1, values, (err, result) => {
        if (err)
          return res.json({ Message: "Error in node.... " });
        if (result.length > 0) {
          const client = result[0];
      const id_client= client.id_client;  
      const nom = client.nom_cl;
      const prenom= client.prenom_cl;
          return res.json({ Login: true, UserType: 'client' ,id_client, nom, prenom});
        } else {
          const sql2 = "SELECT * FROM admin WHERE email= ?  and  password= ?";
          db.query(sql2, values, (err, result) => {
            if (err)
              return res.json({ Message: "Error in node.... " });
            if (result.length > 0) {
              return res.json({ Login: true, UserType: 'admin' });
            } else {
              return res.json({ Login: false });
            }
          });
        }
      });
    }
  });
});
 ////////STATIC/////////////
app.get('/api/age', (_req, res) => {
  const query = 'SELECT age, COUNT(*) as count FROM avocat GROUP BY age';
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données dâge des avocats.' });
    } else {
      const labels = results.map((row) => row.age);
      const data = results.map((row) => row.count);
      res.json({ labels, data });
    }
  });
});

app.get('/api/specialite', (_req, res) => {
  const query = 'SELECT specialite, COUNT(*) as count FROM avocat GROUP BY specialite';
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des données de spécialité des avocats." });
    } else {
      const labels = results.map((row) => row.spécialité);
      const data = results.map((row) => row.count);
      res.json({ labels, data });
    }
  });
});

app.post('/api/avocat', (req, response) => {
  const { nom, age } = req.body;
  const query = 'INSERT INTO avocat (nom_av, age) VALUES (?, ?)';
  db.query(query, [nom, age], (error, res) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de l'insertion des données de l'avocat." });
    } else {
      res.json({ success: true });
    }
  });
});


 /////////////////////////////////////////



/// Endpoint pour supprimer le compte d'un avocat
app.delete('/avocat/:code_barrau', (req, res) => {
  const code_barrau = req.params.code_barrau;

  // Delete rows from temoignage table first
  const deleteTemoignageQuery = 'DELETE FROM temoignage WHERE code_barrau = ?';
  db.query(deleteTemoignageQuery, [code_barrau], (err, temoignageResult) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la suppression des témoignages' });
    }

    // Delete avocat after deleting temoignages
    const deleteAvocatQuery = 'DELETE FROM avocat WHERE code_barrau = ?';
    db.query(deleteAvocatQuery, [code_barrau], (err, avocatResult) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erreur lors de la suppression de l\'avocat' });
      }

      return res.sendStatus(200);
    });
  });
});
/////////////////DELETE TEMOIGNEGE///////////////

app.delete('/temoignage/:id_client/:code_barrau/:id', (req, res) => {
  const id_client = req.params.id_client;
  const code_barrau = req.params.code_barrau;
  const id = req.params.id;


  const deleteTemoignageQuery = 'DELETE FROM temoignage WHERE id_client = ? AND code_barrau = ? AND id = ?';
  db.query(deleteTemoignageQuery, [id_client,code_barrau,id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la suppression du témoignage' });
    }

    return res.sendStatus(200);
  });
});

app.delete('/client/:id_client', (req, res) => {
  const id_client = req.params.id_client;
// Delete rows from temoignage table first
const deleteTemoignageQuery = 'DELETE FROM temoignage WHERE id_client = ?';
db.query(deleteTemoignageQuery, [id_client], (err, temoignageResult) => {
  if (err) {
    console.log(err);
    return res.status(500).json({ error: 'Erreur lors de la suppression des témoignages' });
  }});

  const deleteCompteQuery = 'DELETE FROM client WHERE id_client = ?';
  db.query(deleteCompteQuery, [id_client], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la suppression du compte' });
    }

    return res.sendStatus(200);
  });
});



app.get('/temoignage/:code_barrau', async (req, res) => {
  const code_barrau = req.params.code_barrau;
  try {
    const query = `
      SELECT t.*, c.nom_cl, c.prenom_cl
      FROM temoignage AS t
      INNER JOIN client AS c ON t.id_client= c.id_client
      WHERE t.code_barrau = ?`;
      
    db.query(query, [code_barrau], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error....' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'No testimonials found' });
      }

      res.json(results);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Define a route to handle the POST request for storing testimonials
app.post('/temoignage/:code_barrau/:id_client', async (req, res) => {
  const code_barrau = req.params.code_barrau;
  const id_client = req.params.id_client;
 
  const {temoignage } = req.body;

   
    const currentDate = new Date().toISOString();
  const sql = 'INSERT INTO temoignage (id_client, code_barrau,description, date) VALUES (?, ?, ?, ?)';
  const values = [id_client, code_barrau, temoignage, currentDate];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ Message: 'Error in node....' });
    }
    return res.json(result);
  });});





app.get('/avocat/:code_barrau', (req, res) => {
  const code_barrau = req.params.code_barrau;

  const sql = 'SELECT * FROM avocat WHERE code_barrau = ?';
  db.query(sql, [code_barrau], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la récupération des informations de l\'avocat' });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: 'Avocat non trouvé....' });
    }

    const avocat = result[0];
    return res.json(avocat);
  });
});


  

// Handle POST request for the form
app.post('/Formulaireprofil', (req, res) => {
  const code_barrau = req.query.code_barrau; 
  const updates = {};
  const values = [];

  if (req.body.nom) {
    updates.nom_av = req.body.nom;
    values.push(req.body.nom);
  }
  if (req.body.prenom) {
    updates.prenom_av = req.body.prenom;
    values.push(req.body.prenom);
  }
  if (req.body.adressecabinet) {
    updates.adresse = req.body.adressecabinet;
    values.push(req.body.adressecabinet);
  }
  if (req.body.codepostal) {
    updates.code_postale = req.body.codepostal;
    values.push(req.body.codepostal);
  }
  if (req.body.ville) {
    updates.wilaya = req.body.ville;
    values.push(req.body.ville);
  }
  if (req.body.telephone) {
    updates.num_tel_av = req.body.telephone;
    values.push(req.body.telephone);
  }
  if (req.body.age) {
    updates.age = req.body.age;
    values.push(req.body.age);
  }
  if (req.body.specialite) {
    updates.specialite = req.body.specialite;
    values.push(req.body.specialite);
  }
  if (req.body.type) {
    updates.type = req.body.type;
    values.push(req.body.type);
  }
  if (req.body.email) {
    updates.email = req.body.email;
    values.push(req.body.email);
  }
  if (req.body.description) {
    updates.description = req.body.description;
    values.push(req.body.description);
  } 
  let sql = 'UPDATE avocat SET ';
  const updateKeys = Object.keys(updates);
  for (let i = 0; i < updateKeys.length; i++) {
    sql += `${updateKeys[i]} = ?`;
    if (i !== updateKeys.length - 1) {
      sql += ', ';
    }
  }
  sql += ' WHERE code_barrau = ?';
  values.push(code_barrau);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ Message: 'Error in node....' });
    }
    return res.json({ code_barrau: code_barrau, result: result });
  });
});




 /*///////////////RV//////////////////////////////////////////////////*/

app.post('/rendez_vous/:code_barrau/:id_client', (req, res) => {
  const code_barrau = req.params.code_barrau;
  const id_client = req.params.id_client;
 
  const { date, heure} = req.body;
  const query = 'INSERT INTO rendez_vous (date_re, heure,code_barrau,id_client) VALUES (?, ?,?, ?)';
  db.query(query, [date, heure,code_barrau,id_client], (error, _result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Er  ////reur lors de l'enregistrement du rendez-vous." });
    } else {
      res.json({ success: true });
    }
  });
});




app.delete('/client/:id_client', (req, res) => {
   const id_client = req.params.id_client;
  // Delete rows from temoignage table first
  const deleteTemoignageQuery = 'DELETE FROM rendez_vous WHERE id_client = ?';
  db.query(deleteTemoignageQuery, [id_client], (err, temoignageResult) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la suppression des témoignages' });
    }});
  const deleteCompteQuery = 'DELETE FROM client WHERE id_client = ?';
  db.query(deleteCompteQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Erreur lors de la suppression du compte' });
    }

    return res.sendStatus(200);
  });
});





app.listen(8081, () => {
  console.log("running.........");
});

