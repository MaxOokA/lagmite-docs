const operators = [
    { name: "+ Addition", file: "operators/add.html" },
    { name: "- Subtraction", file: "operators/sub.html" },
    { name: "* Multiplication", file: "operators/mul.html" },
    { name: "/ Division", file: "operators/div.html" },
    { name: "% Modulo", file: "operators/mod.html" },
    { name: "^ Power", file: "operators/pow.html" },
    { name: "R Root", file: "operators/root.html" },

    { name: "Boolean Operators", file: "operators/boolean.html" },
    { name: "Comparison Operators", file: "operators/comparison.html" },

    { name: "= Assignment", file: "operators/assign.html" },
    { name: "/DSP/ Display", file: "operators/dsp.html" },
    { name: "/CNV/ Conversion", file: "operators/cnv.html" }
];

const input = document.getElementById("search");
const results = document.getElementById("results");

/* Render results */
function render(list) {
    results.innerHTML = "";

    if (list.length === 0) {
        results.innerHTML = "<p>No results</p>";
        return;
    }

    list.forEach(op => {
        const link = document.createElement("a");
        link.href = op.file;
        link.textContent = op.name;
        results.appendChild(link);
    });
}

/* Search logic */
input.addEventListener("input", () => {
    const term = input.value.toLowerCase();

    const filtered = operators.filter(op =>
        op.name.toLowerCase().includes(term)
    );

    render(filtered);
});

/* Initial render */
render(operators);
