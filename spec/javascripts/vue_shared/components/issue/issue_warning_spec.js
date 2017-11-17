import Vue from 'vue';
import issueWarning from '~/vue_shared/components/issue/issue_warning.vue';
import mountComponent from '../../../helpers/vue_mount_component_helper';

const IssueWarning = Vue.extend(issueWarning);

function formatWarning(string) {
  // Replace newlines with a space then replace multiple spaces with one space
  return string.trim().replace(/\n/g, ' ').replace(/\s\s+/g, ' ');
}

describe('Issue Warning Component', () => {
  describe('isLocked', () => {
    it('should render locked issue warning information', () => {
      const vm = mountComponent(IssueWarning, {
        isLocked: true,
      });

      expect(vm.$el.querySelector('.icon use').href.baseVal).toMatch(/lock$/);
      expect(formatWarning(vm.$el.querySelector('span').textContent)).toEqual('This issue is locked. Only project members can comment.');
    });
  });

  describe('isConfidential', () => {
    it('should render confidential issue warning information', () => {
      const vm = mountComponent(IssueWarning, {
        isConfidential: true,
      });

      expect(vm.$el.querySelector('.icon use').href.baseVal).toMatch(/eye-slash$/);
      expect(formatWarning(vm.$el.querySelector('span').textContent)).toEqual('This is a confidential issue. Your comment will not be visible to the public.');
    });
  });

  describe('isLocked and isConfidential', () => {
    it('should render locked and confidential issue warning information', () => {
      const vm = mountComponent(IssueWarning, {
        isLocked: true,
        isConfidential: true,
      });

      expect(vm.$el.querySelector('.icon')).toBeFalsy();
      expect(formatWarning(vm.$el.querySelector('span').textContent)).toEqual('This issue is confidential and locked. People without permission will never get a notification and won\'t be able to comment.');
    });
  });
});
