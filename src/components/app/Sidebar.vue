<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
      <router-link
        :to="link.url"
        :exact="link.exact"
        v-for="link in links"
        :key="link.url"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li :class="{ 'active': isActive }">
          <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">
            {{ link.title }}
          </a>
        </li>
      </router-link>
  </ul>
</template>

<script>
export default {
  props: ['isOpen'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'},
    ]
  })
}
</script>