import { defineConfig } from "cypress";
import sql = require("mssql");
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8087/Account/Login?ReturnUrl=%2f",
    setupNodeEvents(on, config) {
      on("task", {
        async queryLatestUser() {
          const dbConfig = {
            user: "dummy",
            password: "dummy",
            server: "dummy",
            database: "dummy",
            options: {
              encrypt: false,  // as mssql encrypt section is set usually false
              trustServerCertificate: true,
            },
          };

          let pool;
          try {
            pool = await sql.connect(dbConfig);
            //here the following query will pull the credentials, company id of last created account
            const result = await pool.request().query(`
              SELECT TOP 1 id, UserId, Pwd
              FROM PortalUser
              ORDER BY id DESC;
            `);
            return result.recordset[0];
          } catch (err) {
            console.error("DB query error:", err);
            throw err;
          } finally {
            if (pool) {
              await pool.close();
            }
          }
        },
      });
    },
  },
});
