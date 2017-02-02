(function(angular){
'use strict';
// var data = {
//     "count": 2,
//     "start": 0,
//     "total": 18,
//     "subjects": [
//         {
//             "rating": {
//                 "max": 10,
//                 "average": 5.6,
//                 "stars": "30",
//                 "min": 0
//             },
//             "genres": [
//                 "喜剧",
//                 "动作",
//                 "奇幻"
//             ],
//             "title": "西游伏妖篇",
//             "casts": [
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1337000/",
//                     "avatars": {
//                         "small": "http://img7.doubanio.com/img/celebrity/small/1401722517.74.jpg",
//                         "large": "http://img7.doubanio.com/img/celebrity/large/1401722517.74.jpg",
//                         "medium": "http://img7.doubanio.com/img/celebrity/medium/1401722517.74.jpg"
//                     },
//                     "name": "吴亦凡",
//                     "id": "1337000"
//                 },
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1314535/",
//                     "avatars": {
//                         "small": "http://img3.doubanio.com/img/celebrity/small/1398676888.79.jpg",
//                         "large": "http://img3.doubanio.com/img/celebrity/large/1398676888.79.jpg",
//                         "medium": "http://img3.doubanio.com/img/celebrity/medium/1398676888.79.jpg"
//                     },
//                     "name": "林更新",
//                     "id": "1314535"
//                 },
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1029395/",
//                     "avatars": {
//                         "small": "http://img3.doubanio.com/img/celebrity/small/877.jpg",
//                         "large": "http://img3.doubanio.com/img/celebrity/large/877.jpg",
//                         "medium": "http://img3.doubanio.com/img/celebrity/medium/877.jpg"
//                     },
//                     "name": "姚晨",
//                     "id": "1029395"
//                 }
//             ],
//             "collect_count": 69464,
//             "original_title": "西游伏妖篇",
//             "subtype": "movie",
//             "directors": [
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1007152/",
//                     "avatars": {
//                         "small": "http://img3.doubanio.com/img/celebrity/small/1393840734.39.jpg",
//                         "large": "http://img3.doubanio.com/img/celebrity/large/1393840734.39.jpg",
//                         "medium": "http://img3.doubanio.com/img/celebrity/medium/1393840734.39.jpg"
//                     },
//                     "name": "徐克",
//                     "id": "1007152"
//                 }
//             ],
//             "year": "2017",
//             "images": {
//                 "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2411953504.jpg",
//                 "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2411953504.jpg",
//                 "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2411953504.jpg"
//             },
//             "alt": "https://movie.douban.com/subject/25801066/",
//             "id": "25801066"
//         },
//         {
//             "rating": {
//                 "max": 10,
//                 "average": 5.9,
//                 "stars": "30",
//                 "min": 0
//             },
//             "genres": [
//                 "喜剧",
//                 "动作",
//                 "冒险"
//             ],
//             "title": "功夫瑜伽",
//             "casts": [
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1054531/",
//                     "avatars": {
//                         "small": "http://img7.doubanio.com/img/celebrity/small/694.jpg",
//                         "large": "http://img7.doubanio.com/img/celebrity/large/694.jpg",
//                         "medium": "http://img7.doubanio.com/img/celebrity/medium/694.jpg"
//                     },
//                     "name": "成龙",
//                     "id": "1054531"
//                 },
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1274292/",
//                     "avatars": {
//                         "small": "http://img7.doubanio.com/img/celebrity/small/10300.jpg",
//                         "large": "http://img7.doubanio.com/img/celebrity/large/10300.jpg",
//                         "medium": "http://img7.doubanio.com/img/celebrity/medium/10300.jpg"
//                     },
//                     "name": "李治廷",
//                     "id": "1274292"
//                 },
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1338949/",
//                     "avatars": {
//                         "small": "http://img7.doubanio.com/img/celebrity/small/1445870461.85.jpg",
//                         "large": "http://img7.doubanio.com/img/celebrity/large/1445870461.85.jpg",
//                         "medium": "http://img7.doubanio.com/img/celebrity/medium/1445870461.85.jpg"
//                     },
//                     "name": "张艺兴",
//                     "id": "1338949"
//                 }
//             ],
//             "collect_count": 16254,
//             "original_title": "功夫瑜伽",
//             "subtype": "movie",
//             "directors": [
//                 {
//                     "alt": "https://movie.douban.com/celebrity/1299382/",
//                     "avatars": {
//                         "small": "http://img7.doubanio.com/img/celebrity/small/18712.jpg",
//                         "large": "http://img7.doubanio.com/img/celebrity/large/18712.jpg",
//                         "medium": "http://img7.doubanio.com/img/celebrity/medium/18712.jpg"
//                     },
//                     "name": "唐季礼",
//                     "id": "1299382"
//                 }
//             ],
//             "year": "2017",
//             "images": {
//                 "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2412371389.jpg",
//                 "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2412371389.jpg",
//                 "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2412371389.jpg"
//             },
//             "alt": "https://movie.douban.com/subject/26182910/",
//             "id": "26182910"
//         }
//     ],
//     "title": "正在上映的电影-北京"
// };

//创建正在热映的模块
var module = angular.module('moviecat.in_theaters', [
    'ngRoute',
     'moviecat.services.http'
    ])
//配置模块的路由
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters/:page', {
    templateUrl: 'in_theaters/view.html',
    controller: 'InTheatersController'
  });
}])

module.controller('InTheatersController',
    ['$scope',
    '$routeParams',
    'HttpService',
    function($scope,$routeParams,HttpService) {
    var count = 10;  //每一页的条数
    var page = parseInt($routeParams.page);//当前第几页
    var start = (page -1)*count;//从那一页开始
        $scope.subjects={};
        $scope.message='';
        $scope.loading = true;
        $scope.totalCount=0;
        $scope.totalPages=0;
HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',{
    start:start,count:count
},function(data){
            $scope.subjects=data;
            $scope.totalCount=data.total;
            $scope.totalPages=Math.ceil($scope.totalCount/count)
            // $apply的作用就是让指定的表达式重新同步

        $scope.loading =false;
        $scope.$apply()//调用一次apply所有的值同步一次此处指loading和subjects
        console.log($scope.subjects);
        })



}]);
})(angular)





    // 获取豆瓣api数据
    // var doubanApiAddress='http://api.douban.com/v2/movie/in_theaters'
    // 测试服务器  在同一目录下通过ajax请求 获取数据
    //doubanApiAddress替换
    //datas/in_theaters.json（本地）
    //$http.jsonp('datas/in_theaters.json')替换
    //$http.get('datas/in_theaters.json')
    //在angular中使用jsonp的方式做跨域请求，
    //就必须给当前地址加上一个参数
    //callback=JSON_CALLBACK
    // $http.jsonp(doubanApiAddress+'?callback=json_CALLBACK').then(function(res){
    //  if (res.status==200) {
    // $scope.subjects = res.data;
    //  }else{
    //     $scope.message='获取数据错误,错误信息'+res.statusText;
    //  };


    // },function(err){
    //     console.log(err);
    //     $scope.message='获取数据错误,错误信息'+err.statusText;
    // });
    //