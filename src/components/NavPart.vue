<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand nav-a" href="#">HeroBiz<span class="span">.</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Home
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Home1 -index1.html</a></li>
                <li><a class="dropdown-item" href="#">Home2 -index2.html</a></li>
                <li><a class="dropdown-item" href="#">Home3 -index3.html</a></li>
                <li><a class="dropdown-item" href="#">Home4 -index4.html</a></li>
              </ul>
            </li>
            <li class="nav-item  item-hover">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item  item-hover">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item  item-hover">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item  item-hover">
              <a class="nav-link" href="#">Team</a>
            </li>
            <li class="nav-item  item-hover">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Mega Menu
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Drop Down
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item item-hover">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button class="btn-click">Get Started</button>
        </div>
      </div>
    </nav>
  </div>
</template>
  
<script>
export default {
  name: "NavBar"
}
</script>
 