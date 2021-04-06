Describe 'olint'
  It 'show usage'
    When run source olint
    The output should equal 'Usage: olint command'
    The status should equal 1
  End
End
