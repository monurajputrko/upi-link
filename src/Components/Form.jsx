import './Form.css';
import React from 'react'

export const Form = ()=>{
  return (
    <div>
      <section class="hero-section hero pt-5 md-pt-8 pb-5 mb-0" style="background-image: url(https://upilinks.in/assets/images/backgrounds/service-page-bg.png);">
<div class="container">
<div class="row justify-content-center mt-4">
<div class="col-12 mb-4">
<h3 class="text-center home-title">Create shareable UPI Payment links!</h3>
</div>
<div class="col-lg-7 mb-4 mb-lg-0">
<form action="https://upilinks.in/create-link" method="post" name="createLinkForm" novalidate="novalidate">
<input type="hidden" name="_token" value="3rw6Rle1nddEtLsn6h7L0eB0NtD51qFoklXi2577" /> <div class="form-group">
<input type="text" class="form-control" id="name" name="name" placeholder="Your Name (Optional)" maxlength="50" required="" />
</div>
<div class="form-group">
<input type="text" class="form-control" id="upiId" name="upiId" placeholder="UPI ID or VPA" required="" />
</div>
<div class="form-group">
<input type="number" class="form-control" id="amount" name="amount" placeholder="Amount (Optional)" min="0" />
</div>
<div class="form-group">
<input type="text" class="form-control" id="note" name="note" placeholder="Note (Optional)" maxlength="150" />
</div>

<div class="form-group">
<button type="submit" value="send" class="btn btn-secondary px-0 px-4">Generate Payment Link</button>
</div>
<div class="fom-group">
<p class="h6 font-normal">Note: If you enter invalid UPI ID, A dummy link will be generated, please make sure to enter valid UPI ID.</p>
</div>
</form>
</div>
</div>
</div>

<div id="scene">
<img class="img-fluid hero-bg-1 up-down-animation" src="https://upilinks.in/assets/images/background-shape/feature-bg-2.png" alt="" />
<img class="img-fluid hero-bg-2 left-right-animation" src="https://upilinks.in/assets/images/background-shape/seo-ball-1.png" alt="" />
<img class="img-fluid hero-bg-3 left-right-animation" src="https://upilinks.in/assets/images/background-shape/seo-half-cycle.png" alt="" />
<img class="img-fluid hero-bg-4 up-down-animation" src="https://upilinks.in/assets/images/background-shape/green-dot.png" alt="" />
<img class="img-fluid hero-bg-5 left-right-animation" src="https://upilinks.in/assets/images/background-shape/blue-half-cycle.png" alt="" />
<img class="img-fluid hero-bg-6 up-down-animation" src="https://upilinks.in/assets/images/background-shape/seo-ball-1.png" alt="" />
<img class="img-fluid hero-bg-7 left-right-animation" src="https://upilinks.in/assets/images/background-shape/yellow-triangle.png" alt="" />
<img class="img-fluid hero-bg-8 up-down-animation" src="https://upilinks.in/assets/images/background-shape/service-half-cycle.png" alt="" />
<img class="img-fluid hero-bg-9 up-down-animation" src="https://upilinks.in/assets/images/background-shape/team-bg-triangle.png" alt="" />
</div>
</section>
    </div>
  )
}
