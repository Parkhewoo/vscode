// 타이핑 효과
const text = "성장하는 개발자 박희우입니다.";
const typing = document.getElementById("typing");
let i = 0;

function typeEffect() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// 다크모드 / 라이트모드 토글
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// 스킬 필터
const filterBtns = document.querySelectorAll(".skill-filter button");
const skills = document.querySelectorAll(".skill-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        skills.forEach(skill => {
            if (filter === "all" || skill.classList.contains(filter)) {
                skill.style.display = "block";
            } else {
                skill.style.display = "none";
            }
        });
    });
});

// 프로젝트 모달
const modal = document.getElementById("projectModal");
const detailBtns = document.querySelectorAll(".detail-btn");
const closeBtn = document.querySelector(".close");

detailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("modalTitle").textContent = btn.dataset.title;
        document.getElementById("modalDesc").textContent = btn.dataset.desc;
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// 문의하기 유효성 체크
document.getElementById("sendBtn").addEventListener("click", () => {
    const name = document.getElementById("userName").value;

    if (name === "") {
        alert("이름을 입력해주세요.");
        return;
    }
    alert(name + "님의 문의가 등록되었습니다.");
});

// jQuery 스크롤 애니메이션
$(window).on("scroll", function () {
    $(".about-card").each(function () {
        const top = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const height = $(window).height();

        if (scroll + height > top + 50) {
            $(this).addClass("show");
        }
    });
});