<template>
    <div>
        <v-toolbar app fixed clipped-left color="indigo" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>

        <v-menu offset-y fixed>
            <v-btn icon
            slot="activator">
            <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
            <v-list-tile
                v-for="item in items"
                :key="item"
                @click="">
                <v-icon>{{item.icon}}&nbsp;&nbsp;&nbsp;</v-icon> 
                <v-list-tile-title v-text="item.menu">&nbsp;&nbsp;&nbsp;</v-list-tile-title>
            </v-list-tile>
            </v-list>
        </v-menu>
        </v-toolbar>
    </div>
</template>
