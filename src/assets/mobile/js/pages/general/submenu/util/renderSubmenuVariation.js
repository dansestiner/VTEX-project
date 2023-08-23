import renderContainerListItems from "./renderContainerListItems";
import renderDepartmentLists from "./renderDepartmentLists";

export default function (department, index, data) {
  if (index > 6) return;
  const html = String.raw;
  const sections = Object.values(data[index].sections);

  department.innerHTML = html`
    <li class="x-submenu__department-title">
      <a class="x-submenu__department-title-link__see-more" href="${data[index].href}">Ver Tudo</a>

      <a class="x-submenu__department-title-link" href="${data[index].href}" title="${data[index].title}">${data[index
    ].title}</a>
      <button class="x-submenu__back js--submenu-back" title="Voltar">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.719" height="15.581" viewBox="0 0 26.719 15.581">
          <g id="noun_return_2211465" transform="translate(-20.34 -32.789)">
            <g id="Group_3845" data-name="Group 3845" transform="translate(20.34 32.789)">
              <g id="Layer_1" data-name="Layer 1" transform="translate(0 0)">
                <line id="Line_453" data-name="Line 453" x1="3.898" y2="3.898" transform="translate(0.782 0.782)"></line>
                <path id="Path_2853" data-name="Path 2853"
                  d="M5.627,22.75a.781.781,0,0,1-.553-1.331l3.9-3.9a.782.782,0,1,1,1.106,1.106l-3.9,3.9a.775.775,0,0,1-.55.228Z"
                  transform="translate(-4.844 -17.289)"></path>
                <line id="Line_454" data-name="Line 454" x1="3.898" y1="3.898" transform="translate(0.782 4.695)"></line>
                <path id="Path_2854" data-name="Path 2854"
                  d="M9.521,31.4a.778.778,0,0,1-.553-.228l-3.9-3.9a.781.781,0,1,1,1.1-1.106l3.9,3.9a.787.787,0,0,1,0,1.106.778.778,0,0,1-.553.228Z"
                  transform="translate(-4.84 -22.022)"></path>
                <path id="Path_2855" data-name="Path 2855"
                  d="M27.191,37.6h-7.9a.781.781,0,1,1,0-1.562h7.9a4.276,4.276,0,0,0,0-8.549H8.06a.781.781,0,0,1,0-1.562H27.191a5.838,5.838,0,0,1,0,11.672Z"
                  transform="translate(-6.175 -22.015)"></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </li>

    <ul class="x-submenu__department__container flex--row--noWrapp">
      <li class="x-submenu__container__listItem">
        ${renderDepartmentLists(sections[0])}
      </li>
    </ul>
    <ul
      class="x-submenu__department__container x-submenu__department__container--category x-submenu__department__container--oneColumn">
      ${renderContainerListItems(sections.splice(1))}
    </ul>
  `;

}
