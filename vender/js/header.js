var IsLogin = window.sessionStorage.getItem("acc");
var tempHead = `
        <section class="title main">			
				<section class="logo">
					<a href="./caseSearch.html">
							<div class="logoContainer">
							<div class="logo">新竹市建築線</div>
							<div class="logoText">指示(定)線上申請</div>
						</div>	
					</a>									
				<ul >
					<li style="fontWeight:bolder"><span class="status">{{items[0]}}</span></li>
					<li><span>，您好</span></li>
					<li><a @click="activeBtnF" style="cursor: pointer" >｜會員中心｜</a></li>
					<li><a href="./login.html">登入</a></li>
				</ul>
			</section>
			<!-- <div class="v761_70296"> -->
			<section class="select_container">
				<ul id="set">
					<li><a id="activeF" style="cursor: pointer" @click="activeBtnF"><i class="ri-add-circle-line"></i>線上申辦</a></li>
					<li class="line" style="display: block; height:349; width:1px;background-color:#0B4873 ;">　</li>		
					<li><a id="activeS" href="./caseSearch.html"  @click="activeBtnA" ><i class="ri-search-2-line" ></i>案件查詢</a></li>	
				</ul>
			</section>
		</section>
            `
if (IsLogin === "systemLogin") {
	tempHead = `
        <section class="title main">
			<section class="logo">
					<a href="./caseSearchMember.html">
							<div class="logoContainer">
							<div class="logo">新竹市建築線</div>
							<div class="logoText">指示(定)線上申請</div>
						</div>	
					</a>
				<ul >
					<li style="fontWeight:bolder"><span class="status">{{items[1]}}</span></li>
					<li><span>，您好</span></li>
					<li><a href="./memberCenter.html">｜會員中心｜</a></li>
					<li><a style="cursor:pointer" @click="sessionClear">登出</a></li>
				</ul>
			</section>
			<!-- <div class="v761_70296"> -->
			<section class="select_container">
				<ul id="set">
					<li><a id="activeF" href="./apply.html"><i class="ri-add-circle-line" ></i>線上申辦</a></li>
					<li class="line" style="display: block; height:349; width:1px;background-color:#0B4873 ;">　</li>		
					<li><a id="activeS" href="./caseSearchMember.html"  @click="activeBtnA" ><i class="ri-search-2-line" ></i>案件查詢</a></li>	
				</ul>
			</section>
		</section>
            `
}
Vue.component('section-title', {
	data() {
		return {
			items: ['訪客', '王○○'],
			activeBtn: false
		}
	},
	methods: {
		activeBtnF() {
			let memberNoLogin = sessionStorage.getItem("acc");
			console.log(memberNoLogin);
			if (memberNoLogin == null) {
				return Swal.fire({
					icon: 'error',
					title: '無法操作',
					text: '請先登入帳號',
				})
			}
		},
		activeBtnA() { console.log("a") },

		sessionClear() {
			sessionStorage.clear("acc")
			Swal.fire(
				'已登出系統!',
				'感謝您的使用',
				'success'
			)
			window.setTimeout(function start() {

				location.replace("./login.html");
			}, 2000)

		},

		// activeBtnA: function (e) { e.classList.add("-active") }
		// 	(function active() {
		// 		let pageAct = document.querySelector("#activeS");
		// 		pageAct.classList.add("-active");
		// 	})()
	},
	template: tempHead, //用來定義視覺元件
});




