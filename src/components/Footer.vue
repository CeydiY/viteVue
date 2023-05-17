<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-top">
        <p>Simple search. Simple browse. Simple buy.</p>
        <div class="footer-social">
          <p>Follow us on</p>

          <ul class="footer-menu footer-menu-social">
            <li><a href="" title="Follow us on twitter"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="" title="Follow us on instagram"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="" title="Follow us on youtube"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="" title="Follow us on facebook"><i class="fa-brands fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer-bottom">
        <p>2023 Groocery</p>
        <ul class="footer-menu">
          <li><a href="" title="Terms and conditions">Terms and conditions</a></li>
          <li><a href="" title="Privacy policy">Privacy policy</a></li>
          <li><a href="" title="Cookies">Cookies</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/* Footer */
.main-footer {
  margin-top: 50px;
  background-color: #85a2b7;
  color: white;
  font-family: 'EB Garamond', serif;
}

.main-footer a {
  color: white;
}

.main-footer a:hover {
  color: #444A4CFF;
}

.main-footer p {
  margin: 0;
}

.main-footer .container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.footer-bottom {
  font-size: 0.8em;
}

.footer-top, .footer-bottom {
  padding: 20px;
}

.footer-top, .footer-social, .footer-bottom, .footer-menu  {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  list-style: none;
}
.footer-menu li a{
  text-decoration: none;
}
@media (max-width: 481px) {
  .footer-top, .footer-bottom {
    flex-direction: column;
  }
}

.footer-menu-social {
  color: #444A4CFF;
  list-style: none;
}
</style>