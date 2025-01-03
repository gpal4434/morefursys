class PaginationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class="pagination">
              <ul>
                <!-- disabled 처리 -->
                <li class="arrow prev02 disabled"><a href="#"></a></li>
                <li class="arrow prev01 disabled"><a href="#"></a></li>
                <li class="on"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="arrow next01"><a href="#"></a></li>
                <li class="arrow next02 disabled"><a href="#"></a></li>
              </ul>
            </div>
                  `;
  }
}

window.customElements.define("pagination-component", PaginationComponent);
