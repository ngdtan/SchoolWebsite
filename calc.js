function calcpoint() {
    let math = parseFloat(document.getElementById("math").value);
    let lang = parseFloat(document.getElementById("lang").value);
    let lit = parseFloat(document.getElementById("lit").value);
    let che = parseFloat(document.getElementById("che").value);
    let phi = parseFloat(document.getElementById("phi").value);
    let bio = parseFloat(document.getElementById("bio").value);
    let edu = parseFloat(document.getElementById("edu").value);
    let ls = parseFloat(document.getElementById("his").value);
    let dia = parseFloat(document.getElementById("geo").value);

    let tech = [];
    tech[1] = math + lang + phi;
    tech[2] = math + phi + che;
    tech[3] = math + che + lang;
    tech[4] = math + che + bio;
    tech[5] = math + bio + phi;

    let eco = math + lit + lang;

    let teach = math + lit + lang;

    let spe = math + lit + lang;

    let kq = "";

    let kq1 = document.getElementById("kq1");
    let kq2 = document.getElementById("kq2");
    let kq3 = document.getElementById("kq3");
    let kq4 = document.getElementById("kq4");
    let kq5 = document.getElementById("kq5");
    let kq6 = document.getElementById("kq6");
    let kq7 = document.getElementById("kq7");
    let kq8 = document.getElementById("kq8");
    if (tech[1] < 28 && tech[2] < 30 && tech[3] < 27 && tech[4] < 26 && tech[5] < 26.5 && eco < 26 && teach < 27 && spe < 28) {
        kq1.innerHTML = `<h1>Rất tiếc, bạn không đạt đủ điểm để xét vào TEG trong mọi môn</h1>`
    }
    else {
        if (tech[1] >= 28) {
            kq = "đậu CNTT";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq1.innerHTML = `<h1>${concl}</h1>`
        }
        if (tech[2] >= 30) {
            kq = "đậu Khoa học máy tính";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq2.innerHTML = `<h1>${concl}</h1>`
        }
        if (tech[3] >= 27) {
            kq = "đậu Trí tuệ nhân tạo";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq3.innerHTML = `<h1>${concl}</h1>`
        }
        if (tech[4] >= 26) {
            kq = "đậu Công nghệ sinh học";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq4.innerHTML = `<h1>${concl}</h1>`
        }
        if (tech[5] >= 26.5) {
            kq = "đậu Kỹ thuật Y Sinh";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq5.innerHTML = `<h1>${concl}</h1>`
        }
        if (eco >= 26) {
            kq = "đậu Khoa Kinh tế";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq6.innerHTML = `<h1>${concl}</h1>`
        }
        if (lang >= 27) {
            kq = "đậu Khoa Ngoại ngữ";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq7.innerHTML = `<h1>${concl}</h1>`
        }
        if (teach >= 28) {
            kq = "đậu Khoa Sư Phạm";
            let concl = "Chúc mừng bạn đã " + kq + " !";
            kq8.innerHTML = `<h1>${concl}</h1>`
        }
    }


}