module Gitlab
  module Ci
    module Status
      class Failed < Status::Core
        def text
          s_('CiStatusText|failed')
        end

        def label
          s_('CiStatusLabel|failed')
        end

        def icon
          'status_failed'
        end

        def favicon
          Gitlab::Favicon.status('failed')
        end
      end
    end
  end
end
