import httpServer from "./config/http";

async function boostrap(): Promise<void> {
    const PORT: number = 3000;
    httpServer.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}
boostrap()