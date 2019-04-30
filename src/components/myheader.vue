<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- <img class="" src="../assets/logo2.png" width="20%"> -->
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="text px-3" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text px-3" to="/introduction">Introduction</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text px-3" to="/language">Dev Lang</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text px-3" to="/career">Career</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text px-3" to="/portfolio">Portfolio</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style>
nav {
    height: 60px;
    color: #9900FF;
    display: none;
}
.bg-dark {
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
}
.nav-item {
    color: black !important;
    float: left;
    border-right: 1px solid #DDD;
}
.text {
    color: gray !important;
}
.text:hover {
    padding: 16px 24px;
    background-color: white;
    transition: 0.5s;
    color: #4169e1 !important;
}
</style>
