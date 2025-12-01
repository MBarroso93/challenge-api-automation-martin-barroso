import { test, expect } from "@playwright/test";
import { BASE_URL, PET_ID, PET_NAME } from "../constants";

// =========================
// OBTENER MASCOTA GET /pet/{petId}
// =========================
test.describe("OBTENER MASCOTA", () => {

    // Caso 1 – Obtener mascota existente
    test("Obtener mascota existente", async ({ request }) => {
      await request.post(`${BASE_URL}/pet`, {
        data: { id: PET_ID, name: PET_NAME, status: "available" },
      });
  
      const response = await request.get(`${BASE_URL}/pet/${PET_ID}`);
      expect(response.status()).toBe(200);
  
      const json = await response.json();
      expect(json.id).toBe(PET_ID);
      expect(json.name).toBe(PET_NAME);
    });
  
    // Caso 2 – Mascota inexistente
    test("Mascota inexistente", async ({ request }) => {
      const response = await request.get(`${BASE_URL}/pet/999999`);
      expect(response.status()).toBe(404);
    });
  
    // Caso 3 – ID inválido
    test("ID inválido", async ({ request }) => {
      const response = await request.get(`${BASE_URL}/pet/nosoyunid`);
      expect(response.status()).toBe(405);
      ////La doc indica que deberia devolver un 400 con el mensaje "Invalid ID supplied", en la realidad responde 404 con NumberFormatException”
    });
  });