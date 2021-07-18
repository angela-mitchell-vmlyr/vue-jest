import Chat from './Chat.vue';
import { mount } from '@vue/test-utils';

describe('Chat Service', () => {

    let wrapper = null;

    beforeEach(async() => {
        wrapper = mount(Chat, { propsData: {} });
    })

    it("should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});