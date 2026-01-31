export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>GreenSpirit</h1>
      <p>Álcool Neutro. Padrões Globais.</p>

      <img
        src="/hero/tanks.jpg"
        alt="Tanques industriais"
        style={{ maxWidth: "100%", marginTop: "20px", borderRadius: "12px" }}
      />

      <p style={{ marginTop: "20px" }}>
        Conectamos produtores qualificados a compradores internacionais com
        fornecimento confiável, qualidade e compliance.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          borderRadius: "999px",
          border: "none",
          background: "#166534",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Solicitar Cotação
      </button>
    </main>
  );
}
