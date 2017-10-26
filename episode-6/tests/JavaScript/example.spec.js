import { mount } from 'vue-test-utils';
import expect from 'expect';
import Example from '../../resources/assets/js/components/ExampleComponent.vue';

describe ('Example', () => {
    it ('says that it is an example component', () => {
        let wrapper = mount(Example);

        expect(wrapper.html()).toContain('Example Component');
    });
});