import { shallowMount, config } from '@vue/test-utils';
import GrandFather from '@/components/GrandFather.vue';
config.logModifiedComponents = false;

describe('GrandFather.vue', () => {
  it('コンポーネントを入れ子にすると警告がでる？', () => {
    const wrapper = shallowMount(GrandFather, {});
    wrapper.is(GrandFather);
  });
});
