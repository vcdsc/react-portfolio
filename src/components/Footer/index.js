import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer text-center text-lg-start bg-secondary">
      <div className="text-center p-4">
        © 2023{" "}
        <a
          class="text-reset fw-bold"
          href="https://github.com/vcdsc"
          target="_blank"
          rel="noreferrer"
        >
          vcdsc
        </a>
      </div>
    </footer>
  );
}

export default Footer;
