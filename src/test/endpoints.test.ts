const request = require("supertest")

describe('GET /people', ()=>{
    it('Deberia devolver cod 200 con un listado de people no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/people')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.any(String),
                    name: expect.any(String)
                })
            ])
        )
    })
    it("Respuesta código 200 con un objeto encontrado", async () => {
        const res = await request("localhost:3000").get("/people/C-3PO");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                    _id: expect.any(String),
                name: expect.any(String)
            })
        );
    })
    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000").get("/people/test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'Person inexistente! (404) no se encontro' }
            )
        );
    }
    )
})
