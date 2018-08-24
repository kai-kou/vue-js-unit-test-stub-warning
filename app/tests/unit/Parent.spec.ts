import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

describe('Parent.vue', () => {
  it('コンポーネントを入れ子にすると警告がでる？', () => {
    const wrapper = shallowMount(Parent, {});
    wrapper.is(Parent);
  });
});
