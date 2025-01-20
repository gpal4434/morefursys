class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          
      <header class="header">
        <div class="header-inner">
          <button class="menu mobile"></button>
          <a href="/" class="logo">
            <img src="../assets/images/logo.png" alt="logo" />
          </a>
          <nav>
            <div class="intro mobile">
              <p>안녕하세요!<br />상품권 최고 매입 퍼시스모어입니다.</p>

              <div class="btn-box mobile flex">
                <button onclick="location.href='/html/login.html'">로그인</button>
                <button class="sign-up">회원가입</button>
              </div>
            </div>
            <ul class="nav-list">
              <li data-href="/html/hotDeal.html">
                <span>핫딜</span>
              </li>
              <li data-href="/html/customer.html">
                <span>공지사항</span>
              </li>
              <li>
                <span>실시간 매입 현황</span>
              </li>
              <li data-href="/html/customer.html"><span>고객센터</span></li>
            </ul>
            <footer class="mobile">
              <div class="inner">
                <div class="lt">
                  <div class="contact-info">
                    <span>010-1234-1233</span>
                    <span>상담 가능 시간 AM 09:00 ~ PM 11:00</span>
                  </div>
                  <span class="text-gray"
                    >COPYRIGHT ⓒ 퍼시스모어.ALL RIGHTS RESERVED.</span
                  >
                </div>
              </div>
            </footer>
          </nav>
          <div class="btn-box pc flex">
            <button onclick="location.href='/html/login.html'">로그인</button>
            <button onclick="location.href='/html/signUp01.html'" class="sign-up">회원가입</button>
          </div>
        </div>
      </header>
                  `;
    this.navigation();
  }
  navigation() {
    const navItems = this.querySelectorAll(".nav-list li");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((navItem) => navItem.classList.remove("on"));
        item.classList.add("on");

        const href = item.getAttribute("data-href");
        if (href) {
          window.location.href = href;
        }
      });
    });

    const navBtn = this.querySelector(".menu.mobile");
    const nav = this.querySelector("nav");

    if (navBtn && nav) {
      navBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        nav.classList.toggle("show");
        navBtn.classList.toggle("on");
      });
    }
  }
}

window.customElements.define("header-component", HeaderComponent);
