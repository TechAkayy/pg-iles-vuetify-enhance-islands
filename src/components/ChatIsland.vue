<script setup lang="ts">
  const messages = [
    {
      from: 'You',
      message: `Sure, I'll see you later.`,
      time: '10:42am',
      color: 'deep-purple-lighten-1',
    },
    {
      from: 'John Doe',
      message: 'Yeah, sure. Does 1:00pm work?',
      time: '10:37am',
      color: 'green',
    },
    {
      from: 'You',
      message: 'Did you still want to grab lunch today?',
      time: '9:47am',
      color: 'deep-purple-lighten-1',
    },
  ]
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <v-app
      class="bg-background text-on-background"
      style="min-height: 100vh !important"
    >
      <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
      <!-- https://vuetifyjs.com/en/features/application-layout/
        Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
      <!-- <NavBar /> -->
      <v-main class="py-4">
        <v-card width="360" class="elevation-4 mt-12 mx-auto">
          <v-img
            color="surface-variant"
            height="200"
            src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
            cover
          >
            <v-toolbar color="transparent">
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>

              <v-toolbar-title
                class="text-h6"
                text="Messages"
              ></v-toolbar-title>

              <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
              </template>
            </v-toolbar>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">Today</div>

            <v-timeline align="start" density="compact">
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>

                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-main>
      <!-- https://vuetifyjs.com/en/features/application-layout/
        TheFooter contains the v-footer -->
      <!-- <TheFooter /> -->
    </v-app>
    <!-- </div> -->
  </div>
</template>

<style></style>
