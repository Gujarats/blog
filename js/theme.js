(function() {
    var elements = document.querySelectorAll('[data-open]');
    var className = 'open';
    for (var i=0; i<elements.length; i++) {
        // skip opening items tags
        if (i==1){
            initClose(elements[i]);
        }else{
            initOpen(elements[i]);
        }
        
    }

    function initOpen(element) {
        var target = document.getElementById(element.getAttribute('data-open'));
        if (!target) return;

        // dirty hack for small screen ...
        var firstChildUl = target.getElementsByTagName('ul')[0];
        if (firstChildUl && window.getComputedStyle(firstChildUl).display === 'none') {
            target.classList.remove(className);
        }

        addEventListener(className,element,target)
    }

    function initClose(element){
        var target = document.getElementById(element.getAttribute('data-open'));

        if (!target) return;
        
        // removing all child elements 
        target.classList.remove(className);
        ulChildrenMap(function(ul) { ul.style.display = 'none'; });

        addEventListener(className,element,target)
    }


    function addMenuEventListener(className,element,target){

        var ulChildrenMap = function(fn) {
            var lists = target.getElementsByTagName('ul');
            for (var i=0; i<lists.length; i++) {
                fn(lists[i]);
            }
        };

        element.addEventListener('click', function() {
            var list = target.getElementsByTagName('ul')[0];
            if (target.classList.contains(className)) {
                target.classList.remove(className);
                ulChildrenMap(function(ul) { ul.style.display = 'none'; });
            } else {
                target.classList.add(className);
                ulChildrenMap(function(ul) { ul.style.display = 'block'; });
            }
        });
    }
})();
