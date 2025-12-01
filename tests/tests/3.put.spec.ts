import { test, expect } from "@playwright/test";
import { BASE_URL, PET_ID, PET_NAME } from "../constants";

// =========================
// ACTUALIZAR MASCOTA EXISTENTE /pet
// =========================
test.describe("ACTUALIZAR MASCOTA", () => {
  // Caso 1 – Actualizar mascota existente
  test("Actualizar mascota existente", async ({ request }) => {
    await request.post(`${BASE_URL}/pet`, {
      data: { id: PET_ID, name: PET_NAME, status: "available" },
    });

    const UPDATED_NAME = `${PET_NAME}_actualizado`;

    const response = await request.put(`${BASE_URL}/pet`, {
      data: {
        id: PET_ID,
        name: UPDATED_NAME,
        status: "adoptada",
      },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.id).toBe(PET_ID);
    expect(json.name).toBe(UPDATED_NAME);
    expect(json.status).toBe("adoptada");
  });

  // Caso 2 – Actualizar sin ID
  test("Actualizar sin ID", async ({ request }) => {
    const response = await request.put(`${BASE_URL}/pet`, {
      data: {
        name: "MissingID",
      },
    });

    expect(response.status()).toBe(400);
    //La documentacion dice que el endpoint debe devolver un status 400, El endpoint crea una mascota con el siguiente id disponible
  });

  // Caso 3 – Actualizar mascota inexistente
  test("Actualizar mascota inexistente", async ({ request }) => {
    const response = await request.put(`${BASE_URL}/pet`, {
      data: {
        id: 1231231,
        name: "Vol'Jin",
      },
    });

    expect(response.status()).toBe(404);
    //La documentacion dice que el endpoint debe devolver un status 404, El endpoint crea una mascota si esta no se encuentra.
  });
});
