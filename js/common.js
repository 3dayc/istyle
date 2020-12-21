
function searchMotion(){
	let clickNum = 0;  
    $('.search-input input').focus(function(e){
       $('.recommend-search').slideDown('fast'); 
       $('.recommend-search .recommend01').show(); 
       $('.recommend-search .recommend02').hide(); 
    }); 

    $('.search-input input').on('click', function(e){
       let txt = '티'; 
       let str=''; 
       let searchTimer;
       let counter = 0;
       clickNum++; 
       if(clickNum == 2){
          searchTimer = setInterval(function(){
            str += txt[counter]
             counter++; 
             if(counter >= txt.length){
                clearInterval(searchTimer); 
                $('.recommend-search .recommend01').hide(); 
                $('.recommend-search .recommend02').show();
             }
             $('.search-input input').val(str);
          }, 100);
       }
    })

    $('.search-input input').blur(function(e){
       $('.recommend-search').slideUp('fast', function(){
          $('.search-input input').val(''); 
       }); 
       clickNum = 0;
    })
};

function cateOpen(){
	$('.c-gnb-container li').on('mouseenter', function(e){
		if($(this).hasClass('cate-open')){
			$(this).addClass('on'); 
			$('.category-wrap').slideDown('fast'); 
			$('.cate01-menu').on('mouseenter', function(e){
				$(this).addClass('on'); 
				$('.cate02').show(); 
			});
		}else{
			$('.category-wrap').slideUp('fast', function(){
				$('.cate-open').removeClass('on'); 
				$('.cate01-menu').removeClass('on'); 
				$('.cate02').hide(); 
			})
		}; 

		if($(this).hasClass('brand-open')){
			$(this).addClass('on'); 
			$('.brand-wrap').slideDown('fast'); 
		}else{
			$('.brand-wrap').slideUp('fast', function(){
				$('.brand-open').removeClass('on'); 
			}); 
		}

		$('.c-gnb').on('mouseleave', function(){
			$('.brand-open').removeClass('on'); 
			$('.brand-wrap').slideUp('fast'); 

			$('.category-wrap').slideUp('fast');
			$('.cate-open').removeClass('on'); 
			$('.cate01-menu').removeClass('on'); 
			$('.cate02').hide(); 
		})

	}); 

	$('.category-wrap').on('mouseleave', function(e){
		$('.category-wrap').slideUp('fast', function(){
			$('.cate-open').removeClass('on'); 
			$('.cate01-menu').removeClass('on'); 
			$('.cate02').hide(); 
		})
	})

	$('.brand-wrap').on('mouseleave', function(e){
		$('.brand-wrap').slideUp('fast', function(){
			$('.brand-open').removeClass('on'); 
		})
	})
}

function gnbChange(){
	let gnbChangePoint =180; 
	$(window).on('scroll', function(e){
		if($(window).scrollTop() > gnbChangePoint){
			$('.normal-gnb').css('visibility', 'hidden') 
			$('.mini-gnb').addClass('show');
		}else{
			$('.normal-gnb').css('visibility', 'visible') 
			$('.mini-gnb').removeClass('show')
		}
	})
}

function itemOver(){
	let items = document.querySelectorAll('.item-wrap'); 
	items.forEach(function(item){
	  item.addEventListener('mouseenter', function(e){
	    e.preventDefault(); 
	    this.querySelector('.product').classList.add('over')
	  })

	  item.addEventListener('mouseleave', function(e){
	    e.preventDefault(); 
	    this.querySelector('.product').classList.remove('over')
	  })
	})
}

function floating(){
	const topBtn = $('.floating'); 
	const goTopHiddenArea = 700; 

	$(window).on('scroll', function(e){
		if(pageYOffset > goTopHiddenArea){
			topBtn.addClass('show')
		}else{
			topBtn.removeClass('show'); 
		}
	})
	
	topBtn.find('.go-top').on('click', function(e){
		e.preventDefault(); 
		$('html, body').animate({scrollTop : 0},800);

	})
}





