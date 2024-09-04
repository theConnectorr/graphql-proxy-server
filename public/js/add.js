(function () {
  const script = document.createElement("script");
  script.src = "http://localhost:9090/js/table.js";
  document.body.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "http://localhost:9090/css/table.css";
  document.head.appendChild(link);
})();
