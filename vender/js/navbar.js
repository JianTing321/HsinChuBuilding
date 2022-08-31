Vue.component('nav-bar', {
	data() {
		return {
			activeBtn: false
		}
	},
	methods: {
		activeBtnA: function (e) { e.classList.add("-active") }
	},
	template: `
	<main class="applymain">
							<div class="row">
								<div class="col-sm-3">
									<div class="card" style="border-bottom: 2px solid #0B4873; font-weight:bolder">
										<div class="card-body">
											<p class="bigNum" style="color: #0B4873 ;font-weight:bolder">01</h5>
											<p class="card-text" style="color: #0B4873">申請地號</p>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="card">
										<div class="card-body">
											<p class="bigNum">02</h5>
											<p class="card-text">表單填寫</p>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="card">
										<div class="card-body">
											<p class="bigNum">03</h5>
											<p class="card-text">上傳附件</p>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="card">
										<div class="card-body">
											<p class="bigNum">04</h5>
											<p class="card-text">確認提交</p>
										</div>
									</div>
								</div>
							</div>
						</main>
            `, //用來定義視覺元件
});
// let app = new Vue({
// 	el: "#headerCheck",
// 	data: {
// 	},
// });



