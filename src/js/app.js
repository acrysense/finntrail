document.addEventListener("DOMContentLoaded", function () {
    // INPUTMASK
    Inputmask().mask(document.querySelectorAll("input"));

    // SWIPER
    const galleryThumb = document.querySelector('.gallery-thumbs')
    const galleryMain = document.querySelector('.gallery-main')
    const galleryThumbMobile = document.querySelector('.gallery-thumbs-mobile')
    const galleryMainMobile = document.querySelector('.gallery-main-mobile')

    let mySwiperThumb = new Swiper(galleryThumb, {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        direction: 'vertical',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true
    })
    
    let mySwiperMain = new Swiper(galleryMain, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: mySwiperThumb,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    let mySwiperThumbMobile = new Swiper(galleryThumbMobile, {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true
    })
    
    let mySwiperMainMobile = new Swiper(galleryMainMobile, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: mySwiperThumbMobile,
        }
    })

    // EYE PASSWORD
    const inputEye = document.querySelectorAll('.input-group__icon--eye')

    if (inputEye) {
        inputEye.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault()

                if (item.previousElementSibling.type == 'password') {
                    item.previousElementSibling.type = 'text'
                } else {
                    item.previousElementSibling.type = 'password'
                }
            })
        })
    }

    // QUANTITY
    const quantity = document.querySelectorAll('.quantity')
        quantityMinus = document.getElementsByClassName('quantity__minus'),
        quantityPlus = document.getElementsByClassName('quantity__plus')
    
    let quantityCountInput = document.getElementsByClassName('quantity__number')
    
    if (quantity) {
        quantity.forEach((s, i) => {
            quantityMinus[i].addEventListener('click', () => {
                if ((quantityCountInput[i].value) * 1 >= 1) {
                    quantityCountInput[i].value = (quantityCountInput[i].value) * 1 - 1;
                }
            });
    
            quantityPlus[i].addEventListener('click', () => {
                quantityCountInput[i].value = (quantityCountInput[i].value) * 1 + 1;
            })
        })
    }

    // RANGE SLIDER
    const inputLeft = document.getElementById('range-value-left');
    const inputRight = document.getElementById('range-value-right');

    const rangeValueFrom = document.getElementById('range-value-from');
    const rangeValueTo = document.getElementById('range-value-to');

    let thumbLeft = document.querySelector('.range-slider__thumb--left');
    let thumbRight = document.querySelector('.range-slider__thumb--right');
    let range = document.querySelector('.range-slider__range');

    if (range && thumbLeft && thumbRight) {
        function setLeftValue() {
            let _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);
    
            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    
            let percent = ((_this.value - min) / (max - min)) * 100;
    
            thumbLeft.style.left = percent + '%';
            range.style.left = percent + '%';
            rangeValueFrom.innerHTML = parseInt(inputLeft.value);
        }
        setLeftValue();
    
        function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);
    
            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    
            let percent = ((_this.value - min) / (max - min)) * 100;
    
            thumbRight.style.right = (100 - percent) + '%';
            range.style.right = (100 - percent) + '%';
            rangeValueTo.innerHTML = parseInt(inputRight.value);
        }
        setRightValue();
    
        inputLeft.addEventListener('input', setLeftValue);
        inputRight.addEventListener('input', setRightValue);
    
        inputLeft.addEventListener('mouseover', () => {
            thumbLeft.classList.add('hover');
        });
        inputLeft.addEventListener('mouseout', () => {
            thumbLeft.classList.remove('hover');
        });
        inputLeft.addEventListener('mousedown', () => {
            thumbLeft.classList.add('active');
        });
        inputLeft.addEventListener('mouseup', () => {
            thumbLeft.classList.remove('active');
        });
    
        inputRight.addEventListener('mouseover', () => {
            thumbRight.classList.add('hover');
        });
        inputRight.addEventListener('mouseout', () => {
            thumbRight.classList.remove('hover');
        });
        inputRight.addEventListener('mousedown', () => {
            thumbRight.classList.add('active');
        });
        inputRight.addEventListener('mouseup', () => {
            thumbRight.classList.remove('active');
        });
    }

    // FILTER TRIGGER
    [].forEach.call(document.querySelectorAll(".filter__trigger"), function(el) {
        el.addEventListener("click", function() {
            if (window.innerWidth >= 600) {
                el.parentNode.classList.toggle("filter__item--active");
            }
        });
    });

    // DROPDOWN PROFILE
    const overlay = document.querySelector('.overlay')
    const profileMoreBtn = document.querySelectorAll('.profile__more')
    const dropdownProfile = document.querySelectorAll('.dropdown__list--profile')

    if (profileMoreBtn && dropdownProfile) {
        profileMoreBtn.forEach((item) => {
            item.addEventListener('click', () => {
                if (window.innerWidth >= 600) {
                    dropdownProfile.forEach((child) => child.classList.remove('active'))
                    overlay.classList.add('overlay--active')
                    item.nextElementSibling.classList.add('active')
                }
            })
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (overlay.classList.contains('overlay--active')) {
                overlay.classList.remove('overlay--active')
                dropdownProfile.forEach((child) => child.classList.remove('active'))
            }
        })
    }

    // LIST PROFILE (MOBILE)
    const profileListItem = document.querySelectorAll('.profile__list-item')

    if (profileListItem) {
        profileListItem.forEach((item, i) =>
            item.addEventListener('click', () => {
                document.querySelector('.profile__item--main').classList.remove('profile__item--open')
                document.querySelector('.profile__list').classList.add('profile__list--hidden')
                document.querySelector('.profile').previousElementSibling.style.display = 'none'
                document.querySelector('.profile__copyright').style.display = 'none'
                document.querySelector('.profile__exit').style.display = 'none'
                document.querySelectorAll('.profile__item--edit')[i].classList.add('profile__item--open')
            })
        )
    }

    // TABS
    const tabsItems = document.querySelectorAll('.tabs__item')

    if (tabsItems) {
        tabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.tabs__item').forEach((child) => child.classList.remove('tabs__item--active'))
                document.querySelectorAll('.tabs__content').forEach((child) => child.classList.remove('tabs__content--active'))
    
                item.classList.add('tabs__item--active')
                document.querySelectorAll('.tabs__content')[i].classList.add('tabs__content--active')
            })
        })
    }

    // HAMBURGER MENU (MOBILE)
    const hamburgerToggle = document.getElementById('hamburger-toggle')
    const mobileMenu = document.querySelector('.mobile-menu')

    if (hamburgerToggle && mobileMenu) {
        hamburgerToggle.addEventListener('click', () => {
            document.body.classList.add('scroll-disabled');
            mobileMenu.classList.add('mobile-menu--active');
            modalOverlay.classList.add('modal-overlay--active');
        })
    }

    const mobileHelpBtn = document.querySelector('.mobile-help-btn')
    const mobileBackBtn = document.querySelector('.mobile-menu__back')
    const mobileHelpSection = document.querySelector('.mobile-menu__section')
    const mobileTopSection = document.querySelector('.mobile-menu__top')
    const mobileBottomSection = document.querySelector('.mobile-menu__bottom')

    if (mobileHelpBtn) {
        mobileHelpBtn.addEventListener('click', (event) => {
            event.preventDefault()

            mobileHelpSection.classList.add('mobile-menu__section--active')
            mobileTopSection.classList.add('mobile-menu__top--hidden')
            mobileBottomSection.classList.add('mobile-menu__bottom--hidden')
        })
    }

    if (mobileBackBtn) {
        mobileBackBtn.addEventListener('click', (event) => {
            event.preventDefault()

            mobileHelpSection.classList.remove('mobile-menu__section--active')
            mobileTopSection.classList.remove('mobile-menu__top--hidden')
            mobileBottomSection.classList.remove('mobile-menu__bottom--hidden')

        })
    }

    // MOBILE CATALOG
    const catalogToggle = document.querySelectorAll('.catalog-toggle')
    const mobileCatalog = document.querySelector('.mobile-catalog')
    const mobileCatalogClose = document.querySelector('.mobile-catalog__close')

    if (catalogToggle && mobileCatalog) {
        catalogToggle.forEach((item) =>
            item.addEventListener('click', (event) => {
                event.preventDefault()

                if (mobileMenu.classList.contains('mobile-menu--active')) {
                    mobileMenu.classList.remove('mobile-menu--active');
                    modalOverlay.classList.remove('modal-overlay--active');
                }
                if (window.innerWidth < 600 && !document.body.classList.contains('scroll-disabled')) {
                    document.body.classList.add('scroll-disabled');
                }
                mobileCatalog.classList.add('mobile-catalog--active')
            })
        )
    }

    if (mobileCatalogClose && mobileCatalog) {
        mobileCatalogClose.addEventListener('click', () => {
            document.body.classList.remove('scroll-disabled');
            mobileCatalog.classList.remove('mobile-catalog--active')
        })
    }
    
    // HEIGHT 100VH FIX FOR IOS
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // PRODUCTS MORE (MOBILE)
    const productsCart = document.querySelectorAll('.products__cart')
    const productMobile = document.querySelector('.product--mobile')
    const productsList = document.querySelector('.products')

    if (productsCart && productMobile) {
        productsCart.forEach((item) =>
            item.addEventListener('click', () => {
                productsList.classList.add('products--hidden')
                productMobile.classList.add('product--active')
            })
        )
    }

    // FILTER (MOBILE)
    const filterBtn = document.querySelector('.filter-toggle')
    const filter = document.querySelector('.filter')
    const filterClose = document.querySelector('.filter__close')

    if (filterBtn && filter) {
        filterBtn.addEventListener('click', () => {
            document.body.classList.add('scroll-disabled');
            filter.classList.add('filter--active');
        })
    }

    if (filterClose && filter) {
        filterClose.addEventListener('click', () => {
            if (filter.classList.contains('filter--active')) {
                document.body.classList.remove('scroll-disabled');
                filter.classList.remove('filter--active');
            }
        })
    }

    // ORDER DETAILS (MOBILE)
    const orderMobileBtn = document.querySelector('.mobile-detailted-status')
    const orderMobile = document.querySelector('.order')
    const orderCurrentStatus = document.querySelector('.orders__current')

    if (orderMobileBtn && orderMobile) {
        orderMobileBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!orderMobile.classList.contains('order--active')) {
                orderMobileBtn.innerHTML = 'Скрыть статус'
            } else {
                orderMobileBtn.innerHTML = 'Подробный статус'
            }

            orderMobile.classList.toggle('order--active')
            orderCurrentStatus.classList.toggle('orders__current--hidden')
        })
    }

    // ADD
    const addShopBtn = document.querySelectorAll('.add-shop-mobile')
    const profileSectionAdded = document.querySelectorAll('.profile__section')

    if (addShopBtn) {
        addShopBtn.forEach((item, i) =>
            item.parentNode.addEventListener('click', () => {
                item.parentNode.parentNode.style.display = 'none'

                profileSectionAdded[i].classList.add('profile__section--active')
            })
        )
    } 

    // BACK CALL (MOBILE)
    const backCallBtn = document.querySelector('.back-call')
    const editProfileMain = document.querySelectorAll('.profile__block--main .profile__more')
    const editProfile = document.querySelectorAll('.profile__block:not(.profile__block--main) .profile__more')
    const popUpCall = document.querySelector('.pop-up--call')
    const popUpEditMain = document.querySelector('.pop-up--edit-main')
    const popUpEdit = document.querySelector('.pop-up--edit')

    if (backCallBtn && popUpCall) {
        backCallBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (window.innerWidth < 600) {
                popUpCall.classList.add('pop-up--active')
                document.body.classList.add('scroll-disabled')
                modalOverlay.classList.add('modal-overlay--active')
            }
        })
    }

    if (editProfileMain && popUpEditMain) {
        editProfileMain.forEach((item) =>
            item.addEventListener('click', () => {
                if (window.innerWidth < 600) {
                    popUpEditMain.classList.add('pop-up--active')
                    document.body.classList.add('scroll-disabled')
                    modalOverlay.classList.add('modal-overlay--active')
                }
            })
        )
    }

    if (editProfile && popUpEdit) {
        editProfile.forEach((item) =>
            item.addEventListener('click', () => {
                if (window.innerWidth < 600) {
                    popUpEdit.classList.add('pop-up--active')
                    document.body.classList.add('scroll-disabled')
                    modalOverlay.classList.add('modal-overlay--active')
                }
            })
        )
    }

    const requestCallMobileBtn = document.querySelector('.request-call-mobile')

    if (requestCallMobileBtn) {
        requestCallMobileBtn.addEventListener('click', (event) => {
            event.preventDefault()
            
            popUpCall.classList.remove('pop-up--active')
            modalOverlay.classList.remove('modal-overlay--active')
            modalRequestCall.classList.add('modal--active')
        })
    }

    // MODAL
    const modalRequestCallBtn = document.querySelector('.request-call'),
        modalEmptyTrashBtn = document.querySelector('.empty-trash'),
        modalDetailedStatusBtn = document.querySelector('.detailted-status'),
        modalProfileShopBtn = document.querySelector('.add-shop'),
        modalProfileContactBtn = document.querySelector('.add-contact'),
        modalProfileCounterpartiesBtn = document.querySelector('.add-counterparties'),
        modalDetailsProductBtn = document.querySelectorAll('.details-product')
    
    const modal = document.querySelectorAll('.modal'),
        modalRequestCall = document.querySelector('.modal--request-call'),
        modalEmptyTrash = document.querySelector('.modal--empty-trash'),
        modalDetailedStatus = document.querySelector('.modal--order'),
        modalProfileShop = document.querySelector('.modal--profile-shop'),
        modalProfileContact = document.querySelector('.modal--profile-contact'),
        modalProfileCounterparties = document.querySelector('.modal--profile-counterparties'),
        modalDetailsProduct = document.querySelector('.modal--product')
    
    const modalClose = document.querySelectorAll('.modal__close')
    const modalOverlay = document.querySelector('.modal-overlay')
    
    if (modalRequestCallBtn) {
        modalRequestCallBtn.addEventListener('click', () => {
            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalRequestCall.classList.add('modal--active');
        });
    }

    if (modalEmptyTrashBtn) {
        modalEmptyTrashBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalEmptyTrash.classList.add('modal--active');
        });
    }

    if (modalDetailedStatusBtn) {
        modalDetailedStatusBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalDetailedStatus.classList.add('modal--active');
        });
    }

    if (modalProfileShopBtn) {
        modalProfileShopBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalProfileShop.classList.add('modal--active');
        });
    }

    if (modalProfileContactBtn) {
        modalProfileContactBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalProfileContact.classList.add('modal--active');
        });
    }

    if (modalProfileCounterpartiesBtn) {
        modalProfileCounterpartiesBtn.addEventListener('click', (event) => {
            event.preventDefault()

            if (!modalOverlay.classList.contains('modal-overlay--active')) {
                modalOverlay.classList.add('modal-overlay--active')
            }
            document.body.classList.add('scroll-disabled');
            modalProfileCounterparties.classList.add('modal--active');
        });
    }

    if (modalDetailsProductBtn) {
        modalDetailsProductBtn.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault()

                if (!modalOverlay.classList.contains('modal-overlay--active')) {
                    modalOverlay.classList.add('modal-overlay--active')
                }
                document.body.classList.add('scroll-disabled');
                modalDetailsProduct.classList.add('modal--active');
            })
        })
    }

    document.body.addEventListener('keyup', (event) => {
        let key = event.keyCode;

        if (modal && modalOverlay.classList.contains('modal-overlay--active')) {
            if (key == 27) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal').forEach((child) => child.classList.remove('modal--active'));
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            };
        }
    }, false);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            if (modal && modalOverlay.classList.contains('modal-overlay--active')) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal').forEach((child) => child.classList.remove('modal--active'));
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            }
            if (hamburgerToggle && mobileMenu.classList.contains('mobile-menu--active')) {
                document.body.classList.remove('scroll-disabled');
                mobileMenu.classList.remove('mobile-menu--active');

                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
                if (mobileHelpSection && mobileHelpSection.classList.contains('mobile-menu__section--active')) {
                    mobileHelpSection.classList.remove('mobile-menu__section--active')
                    mobileTopSection.classList.remove('mobile-menu__top--hidden')
                    mobileBottomSection.classList.remove('mobile-menu__bottom--hidden')
                }
            }
            if (popUpCall && popUpCall.classList.contains('pop-up--active')) {
                popUpCall.classList.remove('pop-up--active');
                document.body.classList.remove('scroll-disabled');
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            }
            if (popUpEditMain && popUpEditMain.classList.contains('pop-up--active')) {
                popUpEditMain.classList.remove('pop-up--active');
                document.body.classList.remove('scroll-disabled');
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            }
            if (popUpEdit && popUpEdit.classList.contains('pop-up--active')) {
                popUpEdit.classList.remove('pop-up--active');
                document.body.classList.remove('scroll-disabled');
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            }
        });
    }

    if (modalClose) {
        modalClose.forEach((item) => {
            item.addEventListener('click', () => {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal').forEach((child) => child.classList.remove('modal--active'));
                modalOverlay.classList.remove('modal-overlay--active');
            })
        })
    }
});