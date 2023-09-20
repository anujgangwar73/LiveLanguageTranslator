const langs = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu",
}

const fromText = document.querySelector(".text1");
let toText = document.querySelector(".text2");
let exchange = document.querySelector(".exchange");
let selectTag = document.querySelectorAll("select");
let icons = document.querySelectorAll(".sel i");
let trans = document.querySelector("#btn");

selectTag.forEach((tag, id) => {
    for (let lang in langs) {
        let sel = id == 0 ? lang == "en-GB" ? "sel" : "" : lang == "hi-IN" ? "sel" : "";
        let opt = `<option ${sel} value="${lang}">${langs[lang]}</option>`;
        tag.insertAdjacentHTML("beforeend", opt);

    }
});

exchange.addEventListener("click", () => {
    let tempT = fromText.ariaValueMax;
    let tempL = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempT;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempL;
});

fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
    let text = fromText.value.trim(),
        transFrom = selectTag[0].value,
        transTo = selectTag[1].value;
    if (!text) {
        return;
    }
    toText.setAttribute("placeholder", "Translating...");
    let api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${transFrom}|${transTo}`;
    fetch(api).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if (data.id == 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});

trans.addEventListener("click", () => {
});

document.getElementById("d1").onclick = function () {
    var x1 = document.createElement("a");

    x1.href = "data:text/plain;charset=UTF-8," + document.getElementById("ta1").value;

    x1.setAttribute("download", document.getElementById("df1").value);

    x1.click();
}
document.getElementById("d2").onclick = function () {
    var x2 = document.createElement("a");

    x2.href = "data:text/plain;charset=UTF-8," + document.getElementById("ta2").value;

    x2.setAttribute("download", document.getElementById("df2").value);

    x2.click();
}