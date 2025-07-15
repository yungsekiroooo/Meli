function calculate() {
    const f = document.forms["gradeForm"];

    function weightedAvg(weights, values) {
        let sum = 0, totalWeight = 0;
        for (let i = 0; i < weights.length; i++) {
            if (!isNaN(values[i])) {
                sum += weights[i] * values[i];
                totalWeight += weights[i];
            }
        }
        return totalWeight ? sum / totalWeight : 0;
    }

    const subjects = [
        { name: "org", inputs: ["org_emd1", "org_emd2", "org_td"], weights: [33, 33, 34], coef: 3 },
        { name: "bio", inputs: ["bio_emd1", "bio_emd2", "bio_emd3", "bio_td"], weights: [22, 22, 22, 34], coef: 3 },
        { name: "gen", inputs: ["gen_emd1", "gen_emd2", "gen_td"], weights: [33, 33, 34], coef: 3 },
        { name: "math", inputs: ["math_emd1", "math_emd2", "math_td"], weights: [33, 33, 34], coef: 3 },
        { name: "bv", inputs: ["bv_emd1", "bv_emd2", "bv_td"], weights: [33, 33, 34], coef: 2 },
        { name: "phy", inputs: ["phy_emd1", "phy_emd2", "phy_td"], weights: [33, 33, 34], coef: 2 },
        { name: "anato", inputs: ["anato"], weights: [1], coef: 2 },
        { name: "sh", inputs: ["sh"], weights: [1], coef: 1 },
        { name: "physio", inputs: ["physio"], weights: [1], coef: 2 },
        { name: "fr", inputs: ["fr"], weights: [1], coef: 1 }
    ];

    let total = 0, coefTotal = 0;

    subjects.forEach(sub => {
        const values = sub.inputs.map(n => parseFloat(f[n].value));
        const moyenne = weightedAvg(sub.weights, values);
        document.getElementById(sub.name + "_result").innerText = "Moyenne: " + moyenne.toFixed(2);
        total += moyenne * sub.coef;
        coefTotal += sub.coef;
    });

    const finalAvg = total / coefTotal;
    document.getElementById("final_result").innerText = "المعدل النهائي: " + finalAvg.toFixed(2);

    // رسالة النجاح
    if (finalAvg >= 10) {
        alert("🎉 تهانينا! لقد نجحت بمعدل " + finalAvg.toFixed(2) + " 🎉");
    } else {
        alert("😢 لم تحقق المعدل المطلوب. حاول مرة أخرى.");
    }
}
