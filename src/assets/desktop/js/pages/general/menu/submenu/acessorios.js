const html = String.raw

export default function () {
  return html`
    <div class=submenuWrapper>
      <ul class="submenu acessorios">

        <!-- [ INICIO ] COLUNA 01 -->
        <li class="submenu__item submenu__item--col1">
          <div class="submenu__item__heading">Categoria</div>
          <ul class="submenu__list">
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Balanca?map=c,c">Balança</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Balança.jpg" width="250px" height="588px" alt="Categoria Balança" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Cadeados?map=c,c">Cadeados</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/CADEADO2.jpg" width="250px" height="588px" alt="Categoria Cadeados" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Capa?map=c,c">Capa</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Capa-de-mala.jpg" width="250px" height="588px" alt="Categoria Capa" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Carteira?map=c,c">Carteira</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Carteira_hover.jpg" width="250px" height="588px" alt="Categoria Carteira" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Necessaire?map=c,c">Necessaire</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Necessaire.jpg" width="250px" height="588px" alt="Categoria Necessaire" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Pochete?map=c,c">Pochete</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Pochete.jpg" width="250px" height="588px" alt="Categoria Pochete" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Porta%20Dolar?map=c,c">Porta Dólar</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Porta-Dolar.jpg" width="250px" height="588px" alt="Categoria Porta Dólar" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Tag%20de%20mala?map=c,c">Tag de Mala</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/TAG-DE-MALA.jpg" width="250px" height="588px" alt="Categoria Tag de Mala" />
              </div>
            </li>
            <li class="submenu__list__item">
              <a class="submenu__itemLink" href="/acessorios/Travesseiro?map=c,c">Travesseiro</a>
              <div class="submenu__imageWrapper">
                <img src="/arquivos/Travesseiro.jpg" width="250px" height="588px" alt="Categoria Travesseiro" />
              </div>
            </li>
          </ul>
        </li>
        <!-- [ FIM ] COLUNA 01 -->

        <!-- [ INÍCIO ] COLUNA 02 -->
        <li class="submenu__item submenu__item--col2">
          <div class="submenu__itemWrapper">
            <div class="submenu__item__heading">faixa de preço</div>
            <ul class="submenu__list">
              <li class="submenu__list__item">
                <a class="submenu__itemLink" href="/acessorios/de-0,01-a-40?map=c,priceFrom">Até R$40,00</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink" href="/acessorios/de-40,01-a-60?map=c,priceFrom">De R$40,01 até R$60,00</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink" href="/acessorios/de-60,01-a-80?map=c,priceFrom">De R$60,01 até R$80,00</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink" href="/acessorios/de-80,01-a-100?map=c,priceFrom">De R$80,01 até R$100,00</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink" href="/acessorios/de-100,01-a-99999?map=c,priceFrom">Acima de R$100,01</a>
              </li>
            </ul>

          </div>
        </li>
        <!-- [ FIM ] COLUNA 02 -->

        <!-- [ INÍCIO ] COLUNA 03 -->
        <li class="submenu__item submenu__item--col3 por-genero">

          <!-- POR GÊNERO -->
          <div class="submenu__itemWrapper">
            <div class="submenu__item__heading submenu__item__heading--material submenu__item__heading--lightGray">Por
              Gênero
            </div>
            <ul class="submenu__list submenu__list--row">
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--gender submenu__itemLink--yourWay-acessories"
                  href="/acessorios?map=c" title="Filtrar por: Para Todos">Para
                  Todos</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--gender submenu__itemLink--female"
                  href="/acessorios/Feminino?map=c,specificationFilter_67" title="Filtrar por: Para Ela">Para Ela</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--gender submenu__itemLink--male"
                  href="/acessorios/Masculino?map=c,specificationFilter_67" title="Filtrar por: Para Ele">Para Ele</a>
              </li>
            </ul>
          </div>

          <!--[ INÍCIO ] POR TOM DE CORES -->
          <div class="submenu__itemWrapper acessorios-por-tom-cores">
            <div class="submenu__item__heading submenu__item__heading--lightGray">Por tom de cores</div>
            <ul class="submenu__list submenu__list--colors submenu__list--row">
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--black"
                  href="/acessorios/Preto?map=c,specificationFilter_42" title="Filtrar por: Cor preta">Preto</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--brown"
                  href="/acessorios/Marrom?map=c,specificationFilter_42" title="Filtrar por: Cor marrom">Marrom</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--green"
                  href="/acessorios/Verde?map=c,specificationFilter_42" title="Filtrar por: Cor verde">Verde</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--blue"
                  href="/acessorios/Azul?map=c,specificationFilter_42" title="Filtrar por: Cor azul">Azul</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--pink"
                  href="/acessorios/Rosa?map=c,specificationFilter_42" title="Filtrar por: Cor rosa">Rosa</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--colored--acessories"
                  href="/acessorios/Colorido?map=c,specificationFilter_42" title="Filtrar por: Colorido">Colorido</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--red"
                  href="/acessorios/Vermelho?map=c,specificationFilter_42" title="Filtrar por: Cor vermelha">Vermelho</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--orange"
                  href="/acessorios/Laranja?map=c,specificationFilter_42" title="Filtrar por: Cor laranja">Laranja</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--purple"
                  href="/acessorios/Roxo?map=c,specificationFilter_42" title="Filtrar por: Cor roxo">Roxo</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--color submenu__itemLink--gray"
                  href="/acessorios/Cinza?map=c,specificationFilter_42" title="Filtrar por: Cor cinza">Cinza</a>
              </li>
            </ul>

          </div>
          <!-- [ FIM ] POR TOM DE CORES -->

        </li>
        <!-- [ FIM ] COLUNA 03 -->

        <!-- [ INÍCIO ] COLUNA 04 -->
        <li class="submenu__item submenu__item--col4 veja-tambem">

          <!-- [ INÍCIO ] VEJA TAMBÉM -->
          <div class="submenu__itemWrapper">
            <div class="submenu__item__heading submenu__item__heading--lightGray">Veja também
            </div>
            <ul class="submenu__list submenu__list--row">
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--pencil-case-purse" href="/Estojo?map=c"
                  title="Filtrar por: Estojo">Estojo</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--satchel" href="/Sacola?map=c"
                  title="Filtrar por: Sacola">Sacola</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--suitcase" href="/mala?map=c"
                  title="Filtrar por: Mala">Mala</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--necessaire" href="/acessorios/Necessaire?map=c,c"
                  title="Filtrar por: Necessaire">Necessaire</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--mochilaSaquinho"
                  href="/saquinho" title="Filtrar por: Mochila Saquinho">Mochila Saquinho</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--folder"
                  href="/Pasta?map=c" title="Filtrar por: Pastas">Pastas</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--little-bags" href="/mala/escolar?map=c,c"
                  title="Filtrar por: Malinha">Malinha</a>
              </li>
              <li class="submenu__list__item">
                <a class="submenu__itemLink--withIcon submenu__itemLink--moch-with-wheels" href="/mochila/2%20Rodas?map=c,specificationFilter_57"
                  title="Filtrar por: Mochila com rodas">Mochila com rodas</a>
              </li>
            </ul>
          </div>
          <!-- [ FIM ] POR TIPO DE CADEADO  -->
        </li>
        <!-- [ FIM ] COLUNA 04 -->  

        <!-- [ INÍCIO ] COLUNA 05 -->
        <li class="submenu__item submenu__item--col5">
          <div class="submenu__itemWrapper">         
            <ul class="submenu__list submenu__list--row">
              <li class="submenu__list__item">
                <a href="/acessorios/?map=c">
                  <button class="see_all">Ver todos os Acessórios</button>  
                </a>                
              </li>
            </ul>
          </div>   
        </li>
        <!-- [ FIM ] COLUNA 05 -->
      </ul>      
    </div>
  `
}