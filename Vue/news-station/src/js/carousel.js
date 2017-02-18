            $.fn.runCarousel = function() {
                var $ct = $(this),
                    $imgCt = $ct.find('.img-ct'),
                    $items = $imgCt.children(),
                    $pre = $ct.find('.pre'),
                    $next = $ct.find('.next'),
                    $bullet = $ct.find('.bullet'),
                    imgWidth = $items.width(),
                    imgCount = $items.length,
                    clock = '',
                    curIdx = 0,
                    isAnimate = false;
                $imgCt.prepend($items.last().clone());
                $imgCt.append($items.first().clone());
                var imgRealCount = $imgCt.children().length;
                $imgCt.css({
                    'left': 0 - imgWidth,
                    'width': imgRealCount * imgWidth
                });
                $pre.on('click', function() {
                    playPre();
                });
                $next.on('click', function() {
                    playNext();
                });
                $bullet.on('click', 'li', function() {
                    var bulletIdx = $(this).index();
                    if (bulletIdx > curIdx) {
                        playNext(bulletIdx - curIdx);
                    } else if (bulletIdx < curIdx) {
                        playPre(curIdx - bulletIdx);
                    }
                });

                function playPre(idx) {
                    var idx = idx || 1;
                    if (!isAnimate) {
                        isAnimate = true;
                        $imgCt.animate({ left: '+=' + (imgWidth * idx) }, function() {
                            curIdx = (curIdx - idx + imgCount) % imgCount;
                            if (curIdx === (imgCount - 1)) {
                                $imgCt.css({ 'left': 0 - imgCount * imgWidth });
                            }
                            isAnimate = false;
                            setBullet();
                        });
                    }
                }

                function playNext(idx) {
                    var idx = idx || 1;
                    if (!isAnimate) {
                        isAnimate = true;
                        $imgCt.animate({ left: '-=' + imgWidth * idx }, function() {
                            curIdx = (curIdx + idx) % imgCount;
                            if (curIdx === 0) {
                                $imgCt.css({ 'left': 0 - imgWidth });
                            }
                            isAnimate = false;
                            setBullet();
                        });
                    }
                }

                function setBullet() {
                    $bullet.find('li').removeClass('active')
                        .eq(curIdx).addClass('active');
                }

                function autoPlay() {
                    clock = setInterval(function() {
                        playNext();
                    }, 2000);
                }

                function stopAuto() {
                    clearInterval(clock);
                }
                autoPlay();
            }
