import { test, expect } from "@playwright/test";
import { BASE_URL, PET_ID, PET_NAME } from "../constants";

// =========================
// ELIMINAR MASCOTA DELETE /pet/{petId}
// =========================
test.describe("Eliminar MASCOTA DELETE /pet/{petId}", () => {

    // Caso 1 – Borrar mascota existente
    test("Borrar mascota existente", async ({ request }) => {
      await request.post(`${BASE_URL}/pet`, {
        data: { id: PET_ID, name: PET_NAME, status: "available" },
      });
  
      const response = await request.delete(`${BASE_URL}/pet/${PET_ID}`);
      expect(response.status()).toBe(200);
    });
  });