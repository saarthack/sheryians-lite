import app from './src/app' 
import { config } from './src/config/config';


const startServer = ()=>{
    const PORT  = config.port || 5500

    app.listen(PORT, () => {
        console.log('Server started on port',PORT);
        
    })
}

startServer()