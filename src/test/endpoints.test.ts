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
                name: "C-3PO"
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

describe('GET /films', ()=>{
    it('Deberia devolver cod 200 con un listado de Films no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/films')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: expect.any(String)
                })
            ])
        )
    })

    it('Deberia devolver cod 200 con un listado de Films no vacio, Filtrado', async()=>{
        const res = await request('localhost:3000')
        .get('/films/4')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining({
                title: "A New Hope"
            })
        )
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000").get("/films/99");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Films inexistente! (404) no se encontro" }
            )
        );
    })
    it("Respuesta código 500 con mensaje de error interno", async () => {
        const res = await request("localhost:3000").get("/films/test");
        expect(res.statusCode).toEqual(500);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Error interno!" }
            )
        );
    })
})

describe('GET /planets', ()=>{
    it('Deberia devolver cod 200 con un listado de Planets no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/planets')
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

    it('Deberia devolver cod 200 con un listado de Planets no vacio y filtrados por clima', async()=>{
        const res = await request('localhost:3000')
        .get('/planets/arid')
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

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000").get("/planets/test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "planets inexistente! (404) no se encontro" }
            )
        );
    })
})

describe('GET /Species', ()=>{
    it('Deberia devolver cod 200 con un listado de Species no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/species')
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

    it('Deberia devolver cod 200 con un listado de Species no vacio, Filtrado', async()=>{
        const res = await request('localhost:3000')
        .get('/species?name=Human')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Human"
                })
            ])
        )
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/species?name=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Specie inexistente! (404) no se encontro" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Species no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/species?designation=sentient");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    designation: "sentient"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/species?designation=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Specie inexistente! (404) no se encontro" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Species no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/species?name=Human&designation=sentient");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Human",
                    designation: "sentient"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/species?name=Human&designation=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Specie inexistente! (404) no se encontro" }
            )
        );
    })
})

//Starships
describe('GET /Starships', ()=>{
    it('Deberia devolver cod 200 con un listado de Starships no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/starships')
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

    it('Deberia devolver cod 200 con un listado de Starships no vacio, Filtrado', async()=>{
        const res = await request('localhost:3000')
        .get('/starships?name=CR90%20corvette')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "CR90 corvette"
                })
            ])
        )
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/starships?name=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Starship not found" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Species no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/starships?model=CR90%20corvette");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    model: "CR90 corvette"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/starships?model=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Starship not found" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Species no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/starships?name=CR90%20corvette&model=CR90%20corvette");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "CR90 corvette",
                    model: "CR90 corvette"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/starships?name=test&model=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "Starship not found" }
            )
        );
    })
})

//Vehicles
describe('GET /Vehicles', ()=>{
    it('Deberia devolver cod 200 con un listado de Vehicles no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/vehicles')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    model: expect.any(String)
                })
            ])
        )
    })

    it('Deberia devolver cod 200 con un listado de Vehicles no vacio, Filtrado', async()=>{
        const res = await request('localhost:3000')
        .get('/vehicles?name=Sand%20Crawler')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Sand Crawler",
                    model: "Digger Crawler"
                })
            ])
        )
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/vehicles?name=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "vehicles not found" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Vehicles no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/vehicles?model=Digger%20Crawler");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    model: "Digger Crawler"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/vehicles?model=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "vehicles not found" }
            )
        );
    })

    it("Deberia devolver cod 200 con un listado de Species no vacio, Filtrado", async () => {
        const res = await request("localhost:3000").get("/vehicles?name=Sand%20Crawler&model=Digger%20Crawler");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Sand Crawler",
                    model: "Digger Crawler"
                })
            ])
        );
    })

    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000")
        .get("/vehicles?name=test&model=test");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: "vehicles not found" }
            )
        );
    })
})

