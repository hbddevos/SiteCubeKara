
const express = ('express');
   const app = express();
   const PORT = 3000;

   app.listen(PORT, '0.0.0.0', () => {
       console.log(`Server is running on http://0.0.0.0:${PORT}`);
   });