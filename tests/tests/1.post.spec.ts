import { test, expect } from "@playwright/test";
import { BASE_URL, PET_ID, PET_NAME } from "../constants";

// =========================
// CREAR MASCOTA POST /pet
// =========================
test.describe("CREAR MASCOTA", () => {
  // Caso 1 – Crear mascota válida
  test("Crear mascota válida", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/pet`, {
      data: {
        id: PET_ID,
        name: PET_NAME,
        status: "available",
      },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.name).toBe(PET_NAME);
    expect(json.status).toBe("available");
  });

  // Caso 2 – Crear mascota sin status
  test("Crear mascota sin status", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/pet`, {
      data: {
        id: 5555,
        name: "petSinStatus",
      },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json).toHaveProperty("name");
    expect(json).not.toHaveProperty("status");
  });

  // Caso 3 – Crear mascota con campos inválidos
  test("Crear mascota con campos inválidos", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/pet`, {
      data: {
        id: "noEsUnNumero",
        name: 12345,
      },
    });

    // PetStore a veces devuelve 500 -    "message": "something bad happened"
    expect(response.status()).toBe(405);
  });
});
