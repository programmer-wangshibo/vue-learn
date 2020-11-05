import { Component, Vue, Watch } from 'vue-property-decorator'

declare module 'vue/types/vue'{
    interface Vue {
        
    }
}

@Component({
    name: 'ResizeHandler'
})
export default class extends Vue {
    @Watch('$route')
    onRouteChange(route: string) {

    }
    beforeMount() {
        window.addEventListener('resize', this.$_resizeHandler)
    }
    beforeDestroy() {
        window.removeEventListener('resize', this.$_resizeHandler)
    }

    $_isMobile() {

    }

    $_resizeHandler() {

    }
}