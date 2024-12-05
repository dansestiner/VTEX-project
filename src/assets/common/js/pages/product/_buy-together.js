const Methods = {
    init() {
        Methods.validateProducts();
    },
    validateProducts() {
        if ($('.x-shelf-bt > ul > li').length > 1) {
            setTimeout(() => {
                Methods.setMainProduct();
                Methods.bindAddRemoveButtons();
                Methods.setTotalizers();
            }, 1000);
        } else {
            $('.x-product__buy-together').remove();
        }
    },

    setMainProduct() {
        const name = $('.x-product__name').html();
        const image = $('.x-product__select-color').find('img').attr('src');
        const listPrice = $('.x-product__old-price > span').html();
        const bestPrice = $('.x-product__best-price > span').html();
        const installments = `Em até <strong>${$('.x-product__installments-wrapper > span:nth-child(1)').html()}</strong> de <strong>${$('.x-product__installments-wrapper > span:nth-child(2)').html()}x</strong> sem juros`;

        $('#buy-together-name').html(name);
        $('#buy-together-image').attr('alt', name).attr('src', image);
        $('#buy-together-old-price').html(listPrice);
        $('#buy-together-best-price').html(bestPrice);
        $('#buy-together-installments').html(installments);
    },

    bindAddRemoveButtons() {
        $('.bt-remove-product').html('Remover');
        $('.bt-add-product').html('Adicionar');

        $('.bt-remove-product').click((ev) => {
            $(ev.currentTarget).parent().parent().addClass('disabled');
            $(ev.currentTarget).addClass('disabled');
            $(ev.currentTarget).parent().find('.bt-add-product').removeClass('disabled');
            Methods.setTotalizers();
        });

        $('.bt-add-product').click((ev) => {
            $(ev.currentTarget).parent().parent().removeClass('disabled');
            $(ev.currentTarget).addClass('disabled');
            $(ev.currentTarget).parent().find('.bt-remove-product').removeClass('disabled');
            Methods.setTotalizers();
        });
    },

    formatNumber(str) {
        return parseFloat(str.replace('R$', '').replace('.', '').replace(',', '.'), 2);
    },

    setTotalizers() {
        var totalPrice = 0;
        var totalProducts = 1;
        var totalEconomy = 0;
        var idsForCartLink = [];  // Limpar o array no início para evitar duplicação

        // Produtos adicionais
        $('.bt-product').each((i, el) => {
            if (!$(el).hasClass('disabled')) {
                const priceProduct = Methods.formatNumber($(el).find('.x-shelf-bt__best-price').html());
                totalPrice += priceProduct;

                if ($(el).find('.x-shelf-bt__old-price').html() !== undefined) {
                    const oldPrice = Methods.formatNumber($(el).find('.x-shelf-bt__old-price').html());
                    totalEconomy += (oldPrice - priceProduct);
                }

                totalProducts++;
            }
        });

        // Produto principal
        const priceMainProduct = Methods.formatNumber($('#buy-together-best-price').html());
        if ($('#buy-together-old-price').html() !== undefined) {
            const oldPriceMainProduct = Methods.formatNumber($('#buy-together-old-price').html());
            totalEconomy += (oldPriceMainProduct - priceMainProduct);
        }

        $('.x-shelf-bt-item.bt-product:disabled').each((i, el) => {
            if (!$(el).hasClass('disabled')) {
                const mainProductId = $(el).attr('rel');
                idsForCartLink.push({ id: mainProductId, quantity: 1, seller: '1' });
            }
        });

        $('.buy-product-checkbox').each((i, el) => {
            if (!$(el).hasClass('disabled')) {
                const mainProductId = $(el).attr('rel');
                idsForCartLink.push({ id: mainProductId, quantity: 1, seller: '1' });
            }
        });

        totalPrice += priceMainProduct;

        $('#bt-qnt-products').html(totalProducts);
        $('#bt-total').html(parseFloat(totalPrice).toFixed(2).toString().replace('.', ','));

        if (totalEconomy <= 0 || isNaN(totalEconomy)) {
            $('.product-advantage').hide();
        } else {
            $('.product-advantage').show();
            $('#bt-economy').html(totalEconomy.toFixed(2).toString().replace('.', ','));
        }

        $('.bt-add-product').click(function(el){
            $(el).parent().parent().addClass('entraNocarrinho');
            $(el).parent().parent().removeClass('NaoEntraNocarrinho');
        });

        $('.bt-remove-product').click(function(el){
            $(el).parent().parent().addClass('NaoEntraNocarrinho');
            $(el).parent().parent().removeClass('entraNocarrinho');

        });

        $('.bt-buy-btn').off('click').on('click', (e) => {
            e.preventDefault();
            ga('send', 'event', 'Buy Togheter - PDP', 'click');
            
            idsForCartLink = [];
            const iDprodutoPrincipal = $('.buy-product-checkbox.buy-product-checkbox-checked').attr('rel')
            idsForCartLink.push({ id: iDprodutoPrincipal, quantity: 1, seller: '1' });

            $('.x-shelf-bt-item.bt-product:not(".disabled")').each((i, el) => {
                var produto2_verificaValor1 = $(el).find('.x-shelf-bt__best-price').text().split('R$')[1].split(',')[0]
                var produto2_verificaValor2 = $(el).find('.x-shelf-bt__best-price').text().split('R$')[1].split(',')[1]
                var produto2_conc2 = produto2_verificaValor1+produto2_verificaValor2;
                produto2_conc2;

                $('.buy-product-checkbox').each((i, ol) => {
                    if (ol.attributes.price.nodeValue == produto2_conc2.trim()) {
                        const mainProductId = $(ol).attr('rel');
                        idsForCartLink.push({ id: mainProductId, quantity: 1, seller: '1' });
                    }
                });
            });
            
            Sestini.vtexHelpers
                .addToCart(idsForCartLink)
                .then(() => {
                    console.log(idsForCartLink)
                    window.location.href = '/checkout/#/cart';
                })
                .fail(err => console.log(err));
        });
    }
};

export default {
    init: Methods.init,
};
