/**
 * Set the class name in Angular using the UI Router.
 * @version  $VERSION
 * {@link }
 * @license MIT License
 */
(function(window,angular){
'use strict';

angular.module('routerPageClass',[])
.directive('routerPageClass', routerPageClassDirective);

routerPageClassDirective.$inject = [];
function routerPageClassDirective ()
{
	var directive = {
		restrict: 'A',
		link : function ($scope, $elem, $attr)
		{

			$scope.$on('$stateChangeSuccess', function (event, toRoute, toParams, fromRoute, fromParams)
			{
				var	elemClass = $elem[0].className,
					elemClasses = elemClass.split(' ');

				if( toRoute.data && toRoute.data.pageClass ) {
					elemClasses.push(toRoute.data.pageClass);
				}

				if( fromRoute.data && fromRoute.data.pageClass ) {
					var index = elemClasses.indexOf(fromRoute.data.pageClass);
					if( index > -1 ) {
						elemClasses.splice(index,1);
					}
				}

				elemClasses = elemClasses.filter( function(e){ return e; } );
				$elem[0].className = elemClasses.join(' ');
			});
		}
	}

	return directive;
}

})(window, angular || global.angular);