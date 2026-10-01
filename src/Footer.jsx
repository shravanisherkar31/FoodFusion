function Footer({ message }) {
  return (
    <>
      <style>{`
        .footer {
          background-color: #f8f8f8;
          padding: 1rem;
          text-align: center;
        }
      `}</style>

      <div className="footer">
        <p>{message}</p>
      </div>
    </>
  );
}

export default Footer;