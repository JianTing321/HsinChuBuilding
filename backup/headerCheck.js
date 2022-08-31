Vue.component('section-title', {
	data() {
		return {
			items: ['訪客', '王○○'],
			activeBtn: false
		}
	},
	methods: {
		activeBtnA: function (e) { e.classList.add("-active") }


		// activeBtnA: function (e) { e.classList.add("-active") }
		// 	(function active() {
		// 		let pageAct = document.querySelector("#activeS");
		// 		pageAct.classList.add("-active");
		// 	})()
	},
	template: `
        <section class="title ">
			<section class="logo">
				<section class="space main">
					<a href="./login.html"><img src="./images/logo/logo.svg" alt=""></a>
					<ul>
						<li style="font-Weight:bolder"><span class="status">{{items[0]}}</span></li>
						<li><span>，您好</span></li>
						<li><a href="">會員中心</a></li>
						<li><a href="./login.html">登入</a></li>
					</ul>
				</section>
				<div class="containerBox">
					<div class="content">
						<section class="StepTitle">首次登入須先進行步驟</section>
						<div class="box main">
							<div class="mdl-card__supporting-text">
								<div class="mdl-stepper-horizontal-alternative">
									<div class="mdl-stepper-step active-step step-done">
										<div class="mdl-stepper-circle"><span>1</span></div>
										<div class="mdl-stepper-title">更改密碼</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>
									<div class="mdl-stepper-step active-step editable-step">
										<div class="mdl-stepper-circle"><span>2</span></div>
										<div class="mdl-stepper-title">自然人憑證綁定</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>
									<div class="mdl-stepper-step active-step">
										<div class="mdl-stepper-circle"><span>3</span></div>
										<div class="mdl-stepper-title">完成步驟</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
            `, //用來定義視覺元件
});
let app = new Vue({
	el: "#headerCheck",
	data: {
	},
});



