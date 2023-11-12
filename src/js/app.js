import "./files/functions.js";
import "./files/slider.js";

//Компоненты
import "../components/header/header.js";
import "../components/footer/footer.js";

function getApiData(apiUrl) {
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка получения данных: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
}

function createHtml(data) {
    if (data) {
        let htmlContent = "";
        for (let i = 0; i < data.length; i++) {
            const noImg = "img/news/bg.png";
            let img = data[i].imgUrl || "";
            const name = data[i].name || "";
            const text = data[i].text || "";
            const author = data[i].author || "";
            const date = data[i].date || "";
            const checkVote = data[i].voteStatus;
            let statusVote = "";
            if (checkVote === false) {
                statusVote = "noVote";
            } else if (checkVote === undefined) {
                statusVote = "";
            } else if (checkVote === true) {
                statusVote = "yesVote";
            }
            if (!(img.startsWith("https://") || img.startsWith("http://"))) {
                img = noImg;
            }
            htmlContent += `
            <div class="news__block">
                <div class="news__img">
                    <img src="${img}" alt="${name}" />
                </div>
                <div class="news__block-info">
                    <h2 class="news__title">${name}</h2>
                    <div class="news__date">${date}</div>
                    <div class="news__text">
                    ${text}
                    </div>
                    <div class="news__author">${author}</div>
                    <button class="news__like ${statusVote}">
                        <img class="like-img like-off" src="img/icons/like.svg" alt="" />
                        <img class="like-img like-on" src="img/icons/like-on.svg" alt="" />
                    </button>
                </div>
            </div>
            `;
        }

        return htmlContent;
    } else {
        return "";
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json";

    try {
        const apiData = await getApiData(apiUrl);
        const htmlContent = createHtml(apiData);

        document.querySelector("#newsCont").innerHTML = htmlContent;
    } catch (error) {
        console.error("error");
    }
});
