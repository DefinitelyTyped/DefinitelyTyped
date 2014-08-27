// Type definitions for TypeScript-Services
// Project: https://www.npmjs.org/package/typescript-services
// Definitions by: Basarat Ali Syed <http://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module TypeScript {
    var DiagnosticCode: {
        error_TS_0_1: string;
        warning_TS_0_1: string;
        Unrecognized_escape_sequence: string;
        Unexpected_character_0: string;
        Missing_close_quote_character: string;
        Identifier_expected: string;
        _0_keyword_expected: string;
        _0_expected: string;
        Identifier_expected_0_is_a_keyword: string;
        Automatic_semicolon_insertion_not_allowed: string;
        Unexpected_token_0_expected: string;
        Trailing_separator_not_allowed: string;
        AsteriskSlash_expected: string;
        public_or_private_modifier_must_precede_static: string;
        Unexpected_token: string;
        Catch_clause_parameter_cannot_have_a_type_annotation: string;
        Rest_parameter_must_be_last_in_list: string;
        Parameter_cannot_have_question_mark_and_initializer: string;
        Required_parameter_cannot_follow_optional_parameter: string;
        Index_signatures_cannot_have_rest_parameters: string;
        Index_signature_parameter_cannot_have_accessibility_modifiers: string;
        Index_signature_parameter_cannot_have_a_question_mark: string;
        Index_signature_parameter_cannot_have_an_initializer: string;
        Index_signature_must_have_a_type_annotation: string;
        Index_signature_parameter_must_have_a_type_annotation: string;
        Index_signature_parameter_type_must_be_string_or_number: string;
        extends_clause_already_seen: string;
        extends_clause_must_precede_implements_clause: string;
        Classes_can_only_extend_a_single_class: string;
        implements_clause_already_seen: string;
        Accessibility_modifier_already_seen: string;
        _0_modifier_must_precede_1_modifier: string;
        _0_modifier_already_seen: string;
        _0_modifier_cannot_appear_on_a_class_element: string;
        Interface_declaration_cannot_have_implements_clause: string;
        super_invocation_cannot_have_type_arguments: string;
        Only_ambient_modules_can_use_quoted_names: string;
        Statements_are_not_allowed_in_ambient_contexts: string;
        Implementations_are_not_allowed_in_ambient_contexts: string;
        declare_modifier_not_allowed_for_code_already_in_an_ambient_context: string;
        Initializers_are_not_allowed_in_ambient_contexts: string;
        Parameter_property_declarations_can_only_be_used_in_a_non_ambient_constructor_declaration: string;
        Function_implementation_expected: string;
        Constructor_implementation_expected: string;
        Function_overload_name_must_be_0: string;
        _0_modifier_cannot_appear_on_a_module_element: string;
        declare_modifier_cannot_appear_on_an_interface_declaration: string;
        declare_modifier_required_for_top_level_element: string;
        Rest_parameter_cannot_be_optional: string;
        Rest_parameter_cannot_have_an_initializer: string;
        set_accessor_must_have_one_and_only_one_parameter: string;
        set_accessor_parameter_cannot_be_optional: string;
        set_accessor_parameter_cannot_have_an_initializer: string;
        set_accessor_cannot_have_rest_parameter: string;
        get_accessor_cannot_have_parameters: string;
        Modifiers_cannot_appear_here: string;
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: string;
        Class_name_cannot_be_0: string;
        Interface_name_cannot_be_0: string;
        Enum_name_cannot_be_0: string;
        Module_name_cannot_be_0: string;
        Enum_member_must_have_initializer: string;
        Export_assignment_cannot_be_used_in_internal_modules: string;
        Export_assignment_not_allowed_in_module_with_exported_element: string;
        Module_cannot_have_multiple_export_assignments: string;
        Ambient_enum_elements_can_only_have_integer_literal_initializers: string;
        module_class_interface_enum_import_or_statement: string;
        constructor_function_accessor_or_variable: string;
        statement: string;
        case_or_default_clause: string;
        identifier: string;
        call_construct_index_property_or_function_signature: string;
        expression: string;
        type_name: string;
        property_or_accessor: string;
        parameter: string;
        type: string;
        type_parameter: string;
        declare_modifier_not_allowed_on_import_declaration: string;
        Function_overload_must_be_static: string;
        Function_overload_must_not_be_static: string;
        Parameter_property_declarations_cannot_be_used_in_a_constructor_overload: string;
        Invalid_reference_directive_syntax: string;
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher: string;
        Accessors_are_not_allowed_in_ambient_contexts: string;
        _0_modifier_cannot_appear_on_a_constructor_declaration: string;
        _0_modifier_cannot_appear_on_a_parameter: string;
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: string;
        Type_parameters_cannot_appear_on_a_constructor_declaration: string;
        Type_annotation_cannot_appear_on_a_constructor_declaration: string;
        Duplicate_identifier_0: string;
        The_name_0_does_not_exist_in_the_current_scope: string;
        The_name_0_does_not_refer_to_a_value: string;
        super_can_only_be_used_inside_a_class_instance_method: string;
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_property_or_indexer: string;
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: string;
        Value_of_type_0_is_not_callable: string;
        Value_of_type_0_is_not_newable: string;
        Value_of_type_0_is_not_indexable_by_type_1: string;
        Operator_0_cannot_be_applied_to_types_1_and_2: string;
        Operator_0_cannot_be_applied_to_types_1_and_2_3: string;
        Cannot_convert_0_to_1: string;
        Cannot_convert_0_to_1_NL_2: string;
        Expected_var_class_interface_or_module: string;
        Operator_0_cannot_be_applied_to_type_1: string;
        Getter_0_already_declared: string;
        Setter_0_already_declared: string;
        Exported_class_0_extends_private_class_1: string;
        Exported_class_0_implements_private_interface_1: string;
        Exported_interface_0_extends_private_interface_1: string;
        Exported_class_0_extends_class_from_inaccessible_module_1: string;
        Exported_class_0_implements_interface_from_inaccessible_module_1: string;
        Exported_interface_0_extends_interface_from_inaccessible_module_1: string;
        Public_static_property_0_of_exported_class_has_or_is_using_private_type_1: string;
        Public_property_0_of_exported_class_has_or_is_using_private_type_1: string;
        Property_0_of_exported_interface_has_or_is_using_private_type_1: string;
        Exported_variable_0_has_or_is_using_private_type_1: string;
        Public_static_property_0_of_exported_class_is_using_inaccessible_module_1: string;
        Public_property_0_of_exported_class_is_using_inaccessible_module_1: string;
        Property_0_of_exported_interface_is_using_inaccessible_module_1: string;
        Exported_variable_0_is_using_inaccessible_module_1: string;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_type_1: string;
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_type_1: string;
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_type_1: string;
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_1: string;
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_type_1: string;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_type_1: string;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_type_1: string;
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_type_1: string;
        Parameter_0_of_exported_function_has_or_is_using_private_type_1: string;
        Parameter_0_of_constructor_from_exported_class_is_using_inaccessible_module_1: string;
        Parameter_0_of_public_static_property_setter_from_exported_class_is_using_inaccessible_module_1: string;
        Parameter_0_of_public_property_setter_from_exported_class_is_using_inaccessible_module_1: string;
        Parameter_0_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_1: string;
        Parameter_0_of_call_signature_from_exported_interface_is_using_inaccessible_module_1: string;
        Parameter_0_of_public_static_method_from_exported_class_is_using_inaccessible_module_1: string;
        Parameter_0_of_public_method_from_exported_class_is_using_inaccessible_module_1: string;
        Parameter_0_of_method_from_exported_interface_is_using_inaccessible_module_1: string;
        Parameter_0_of_exported_function_is_using_inaccessible_module_1: string;
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_type_0: string;
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_type_0: string;
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_0: string;
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_type_0: string;
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_type_0: string;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_type_0: string;
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_type_0: string;
        Return_type_of_method_from_exported_interface_has_or_is_using_private_type_0: string;
        Return_type_of_exported_function_has_or_is_using_private_type_0: string;
        Return_type_of_public_static_property_getter_from_exported_class_is_using_inaccessible_module_0: string;
        Return_type_of_public_property_getter_from_exported_class_is_using_inaccessible_module_0: string;
        Return_type_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_0: string;
        Return_type_of_call_signature_from_exported_interface_is_using_inaccessible_module_0: string;
        Return_type_of_index_signature_from_exported_interface_is_using_inaccessible_module_0: string;
        Return_type_of_public_static_method_from_exported_class_is_using_inaccessible_module_0: string;
        Return_type_of_public_method_from_exported_class_is_using_inaccessible_module_0: string;
        Return_type_of_method_from_exported_interface_is_using_inaccessible_module_0: string;
        Return_type_of_exported_function_is_using_inaccessible_module_0: string;
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: string;
        A_parameter_list_must_follow_a_generic_type_argument_list_expected: string;
        Multiple_constructor_implementations_are_not_allowed: string;
        Unable_to_resolve_external_module_0: string;
        Module_cannot_be_aliased_to_a_non_module_type: string;
        A_class_may_only_extend_another_class: string;
        A_class_may_only_implement_another_class_or_interface: string;
        An_interface_may_only_extend_another_class_or_interface: string;
        Unable_to_resolve_type: string;
        Unable_to_resolve_type_of_0: string;
        Unable_to_resolve_type_parameter_constraint: string;
        Type_parameter_constraint_cannot_be_a_primitive_type: string;
        Supplied_parameters_do_not_match_any_signature_of_call_target: string;
        Supplied_parameters_do_not_match_any_signature_of_call_target_NL_0: string;
        Invalid_new_expression: string;
        Call_signatures_used_in_a_new_expression_must_have_a_void_return_type: string;
        Could_not_select_overload_for_new_expression: string;
        Type_0_does_not_satisfy_the_constraint_1_for_type_parameter_2: string;
        Could_not_select_overload_for_call_expression: string;
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature: string;
        Calls_to_super_are_only_valid_inside_a_class: string;
        Generic_type_0_requires_1_type_argument_s: string;
        Type_of_array_literal_cannot_be_determined_Best_common_type_could_not_be_found_for_array_elements: string;
        Could_not_find_enclosing_symbol_for_dotted_name_0: string;
        The_property_0_does_not_exist_on_value_of_type_1: string;
        Could_not_find_symbol_0: string;
        get_and_set_accessor_must_have_the_same_type: string;
        this_cannot_be_referenced_in_current_location: string;
        Static_members_cannot_reference_class_type_parameters: string;
        Class_0_is_recursively_referenced_as_a_base_type_of_itself: string;
        Interface_0_is_recursively_referenced_as_a_base_type_of_itself: string;
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: string;
        super_cannot_be_referenced_in_non_derived_classes: string;
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: string;
        Constructors_for_derived_classes_must_contain_a_super_call: string;
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: string;
        _0_1_is_inaccessible: string;
        this_cannot_be_referenced_within_module_bodies: string;
        Invalid_expression_types_not_known_to_support_the_addition_operator: string;
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: string;
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: string;
        The_type_of_a_unary_arithmetic_operation_operand_must_be_of_type_any_number_or_an_enum_type: string;
        Variable_declarations_of_a_for_statement_cannot_use_a_type_annotation: string;
        Variable_declarations_of_a_for_statement_must_be_of_types_string_or_any: string;
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
        The_left_hand_side_of_an_in_expression_must_be_of_types_any_string_or_number: string;
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: string;
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: string;
        Setters_cannot_return_a_value: string;
        Tried_to_query_type_of_uninitialized_module_0: string;
        Tried_to_set_variable_type_to_uninitialized_module_type_0: string;
        Type_0_does_not_have_type_parameters: string;
        Getters_must_return_a_value: string;
        Getter_and_setter_accessors_do_not_agree_in_visibility: string;
        Invalid_left_hand_side_of_assignment_expression: string;
        Function_declared_a_non_void_return_type_but_has_no_return_expression: string;
        Cannot_resolve_return_type_reference: string;
        Constructors_cannot_have_a_return_type_of_void: string;
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: string;
        All_symbols_within_a_with_block_will_be_resolved_to_any: string;
        Import_declarations_in_an_internal_module_cannot_reference_an_external_module: string;
        Class_0_declares_interface_1_but_does_not_implement_it_NL_2: string;
        Class_0_declares_class_1_as_an_interface_but_does_not_implement_it_NL_2: string;
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer: string;
        this_cannot_be_referenced_in_static_initializers_in_a_class_body: string;
        Class_0_cannot_extend_class_1_NL_2: string;
        Interface_0_cannot_extend_class_1_NL_2: string;
        Interface_0_cannot_extend_interface_1_NL_2: string;
        Duplicate_overload_signature_for_0: string;
        Duplicate_constructor_overload_signature: string;
        Duplicate_overload_call_signature: string;
        Duplicate_overload_construct_signature: string;
        Overload_signature_is_not_compatible_with_function_definition: string;
        Overload_signature_is_not_compatible_with_function_definition_NL_0: string;
        Overload_signatures_must_all_be_public_or_private: string;
        Overload_signatures_must_all_be_exported_or_not_exported: string;
        Overload_signatures_must_all_be_ambient_or_non_ambient: string;
        Overload_signatures_must_all_be_optional_or_required: string;
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: string;
        this_cannot_be_referenced_in_constructor_arguments: string;
        Instance_member_cannot_be_accessed_off_a_class: string;
        Untyped_function_calls_may_not_accept_type_arguments: string;
        Non_generic_functions_may_not_accept_type_arguments: string;
        A_generic_type_may_not_reference_itself_with_a_wrapped_form_of_its_own_type_parameters: string;
        Rest_parameters_must_be_array_types: string;
        Overload_signature_implementation_cannot_use_specialized_type: string;
        Export_assignments_may_only_be_used_at_the_top_level_of_external_modules: string;
        Export_assignments_may_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: string;
        Only_public_methods_of_the_base_class_are_accessible_via_the_super_keyword: string;
        Numeric_indexer_type_0_must_be_assignable_to_string_indexer_type_1: string;
        Numeric_indexer_type_0_must_be_assignable_to_string_indexer_type_1_NL_2: string;
        All_numerically_named_properties_must_be_assignable_to_numeric_indexer_type_0: string;
        All_numerically_named_properties_must_be_assignable_to_numeric_indexer_type_0_NL_1: string;
        All_named_properties_must_be_assignable_to_string_indexer_type_0: string;
        All_named_properties_must_be_assignable_to_string_indexer_type_0_NL_1: string;
        Generic_type_references_must_include_all_type_arguments: string;
        Default_arguments_are_only_allowed_in_implementation: string;
        Overloads_cannot_differ_only_by_return_type: string;
        Function_expression_declared_a_non_void_return_type_but_has_no_return_expression: string;
        Import_declaration_referencing_identifier_from_internal_module_can_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: string;
        Could_not_find_symbol_0_in_module_1: string;
        Unable_to_resolve_module_reference_0: string;
        Could_not_find_module_0_in_module_1: string;
        Exported_import_declaration_0_is_assigned_value_with_type_that_has_or_is_using_private_type_1: string;
        Exported_import_declaration_0_is_assigned_value_with_type_that_is_using_inaccessible_module_1: string;
        Exported_import_declaration_0_is_assigned_type_that_has_or_is_using_private_type_1: string;
        Exported_import_declaration_0_is_assigned_type_that_is_using_inaccessible_module_1: string;
        Exported_import_declaration_0_is_assigned_container_that_is_or_is_using_inaccessible_module_1: string;
        Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_1: string;
        Internal_module_reference_0_in_import_declaration_does_not_reference_module_instance_for_1: string;
        Module_0_cannot_merge_with_previous_declaration_of_1_in_a_different_file_2: string;
        Interface_0_cannot_simultaneously_extend_types_1_and_2_NL_3: string;
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: string;
        Ambient_external_module_declaration_cannot_be_reopened: string;
        All_declarations_of_merged_declaration_0_must_be_exported_or_not_exported: string;
        super_cannot_be_referenced_in_constructor_arguments: string;
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: string;
        Ambient_external_module_declaration_must_be_defined_in_global_context: string;
        Ambient_external_module_declaration_cannot_specify_relative_module_name: string;
        Import_declaration_in_an_ambient_external_module_declaration_cannot_reference_external_module_through_relative_external_module_name: string;
        Could_not_find_the_best_common_type_of_types_of_all_return_statement_expressions: string;
        Import_declaration_cannot_refer_to_external_module_reference_when_noResolve_option_is_set: string;
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: string;
        continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: string;
        break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: string;
        Jump_target_not_found: string;
        Jump_target_cannot_cross_function_boundary: string;
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: string;
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: string;
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: string;
        TypeParameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_public_method_from_exported_class_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_method_from_exported_interface_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_exported_function_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_call_signature_from_exported_interface_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_public_static_method_from_exported_class_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_public_method_from_exported_class_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_method_from_exported_interface_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_exported_function_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_exported_class_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_exported_interface_has_or_is_using_private_type_1: string;
        TypeParameter_0_of_exported_class_is_using_inaccessible_module_1: string;
        TypeParameter_0_of_exported_interface_is_using_inaccessible_module_1: string;
        Duplicate_identifier_i_Compiler_uses_i_to_initialize_rest_parameter: string;
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: string;
        Type_of_conditional_0_must_be_identical_to_1_or_2: string;
        Type_of_conditional_0_must_be_identical_to_1_2_or_3: string;
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_an_external_module: string;
        Constraint_of_a_type_parameter_cannot_reference_any_type_parameter_from_the_same_type_parameter_list: string;
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: string;
        Parameter_0_cannot_be_referenced_in_its_initializer: string;
        Duplicate_string_index_signature: string;
        Duplicate_number_index_signature: string;
        All_declarations_of_an_interface_must_have_identical_type_parameters: string;
        Expression_resolves_to_variable_declaration_i_that_compiler_uses_to_initialize_rest_parameter: string;
        Type_0_is_missing_property_1_from_type_2: string;
        Types_of_property_0_of_types_1_and_2_are_incompatible: string;
        Types_of_property_0_of_types_1_and_2_are_incompatible_NL_3: string;
        Property_0_defined_as_private_in_type_1_is_defined_as_public_in_type_2: string;
        Property_0_defined_as_public_in_type_1_is_defined_as_private_in_type_2: string;
        Types_0_and_1_define_property_2_as_private: string;
        Call_signatures_of_types_0_and_1_are_incompatible: string;
        Call_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
        Type_0_requires_a_call_signature_but_type_1_lacks_one: string;
        Construct_signatures_of_types_0_and_1_are_incompatible: string;
        Construct_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
        Type_0_requires_a_construct_signature_but_type_1_lacks_one: string;
        Index_signatures_of_types_0_and_1_are_incompatible: string;
        Index_signatures_of_types_0_and_1_are_incompatible_NL_2: string;
        Call_signature_expects_0_or_fewer_parameters: string;
        Could_not_apply_type_0_to_argument_1_which_is_of_type_2: string;
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: string;
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: string;
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: string;
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: string;
        Types_of_static_property_0_of_class_1_and_class_2_are_incompatible: string;
        Types_of_static_property_0_of_class_1_and_class_2_are_incompatible_NL_3: string;
        Type_reference_cannot_refer_to_container_0: string;
        Type_reference_must_refer_to_type: string;
        In_enums_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_the_first_enum_element: string;
        _0_overload_s: string;
        Variable_declaration_cannot_have_the_same_name_as_an_import_declaration: string;
        Signature_expected_0_type_arguments_got_1_instead: string;
        Property_0_defined_as_optional_in_type_1_but_is_required_in_type_2: string;
        Types_0_and_1_originating_in_infinitely_expanding_type_reference_do_not_refer_to_same_named_type: string;
        Types_0_and_1_originating_in_infinitely_expanding_type_reference_have_incompatible_type_arguments: string;
        Types_0_and_1_originating_in_infinitely_expanding_type_reference_have_incompatible_type_arguments_NL_2: string;
        Named_properties_0_of_types_1_and_2_are_not_identical: string;
        Types_of_string_indexer_of_types_0_and_1_are_not_identical: string;
        Types_of_number_indexer_of_types_0_and_1_are_not_identical: string;
        Type_of_number_indexer_in_type_0_is_not_assignable_to_string_indexer_type_in_type_1_NL_2: string;
        Type_of_property_0_in_type_1_is_not_assignable_to_string_indexer_type_in_type_2_NL_3: string;
        Type_of_property_0_in_type_1_is_not_assignable_to_number_indexer_type_in_type_2_NL_3: string;
        Static_property_0_defined_as_private_in_type_1_is_defined_as_public_in_type_2: string;
        Static_property_0_defined_as_public_in_type_1_is_defined_as_private_in_type_2: string;
        Types_0_and_1_define_static_property_2_as_private: string;
        Current_host_does_not_support_0_option: string;
        ECMAScript_target_version_0_not_supported_Specify_a_valid_target_version_1_default_or_2: string;
        Module_code_generation_0_not_supported: string;
        Could_not_find_file_0: string;
        A_file_cannot_have_a_reference_to_itself: string;
        Cannot_resolve_referenced_file_0: string;
        Cannot_find_the_common_subdirectory_path_for_the_input_files: string;
        Emit_Error_0: string;
        Cannot_read_file_0_1: string;
        Unsupported_file_encoding: string;
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: string;
        Unsupported_locale_0: string;
        Execution_Failed_NL: string;
        Invalid_call_to_up: string;
        Invalid_call_to_down: string;
        Base64_value_0_finished_with_a_continuation_bit: string;
        Unknown_option_0: string;
        Expected_0_arguments_to_message_got_1_instead: string;
        Expected_the_message_0_to_have_1_arguments_but_it_had_2: string;
        Could_not_delete_file_0: string;
        Could_not_create_directory_0: string;
        Error_while_executing_file_0: string;
        Cannot_compile_external_modules_unless_the_module_flag_is_provided: string;
        Option_mapRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
        Option_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
        Options_mapRoot_and_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: string;
        Option_0_specified_without_1: string;
        codepage_option_not_supported_on_current_platform: string;
        Concatenate_and_emit_output_to_single_file: string;
        Generates_corresponding_0_file: string;
        Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: string;
        Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: string;
        Watch_input_files: string;
        Redirect_output_structure_to_the_directory: string;
        Do_not_emit_comments_to_output: string;
        Skip_resolution_and_preprocessing: string;
        Specify_ECMAScript_target_version_0_default_or_1: string;
        Specify_module_code_generation_0_or_1: string;
        Print_this_message: string;
        Print_the_compiler_s_version_0: string;
        Allow_use_of_deprecated_0_keyword_when_referencing_an_external_module: string;
        Specify_locale_for_errors_and_messages_For_example_0_or_1: string;
        Syntax_0: string;
        options: string;
        file1: string;
        Examples: string;
        Options: string;
        Insert_command_line_options_and_files_from_a_file: string;
        Version_0: string;
        Use_the_0_flag_to_see_options: string;
        NL_Recompiling_0: string;
        STRING: string;
        KIND: string;
        file2: string;
        VERSION: string;
        LOCATION: string;
        DIRECTORY: string;
        NUMBER: string;
        Specify_the_codepage_to_use_when_opening_source_files: string;
        Additional_locations: string;
        This_version_of_the_Javascript_runtime_does_not_support_the_0_function: string;
        Unknown_rule: string;
        Invalid_line_number_0: string;
        Warn_on_expressions_and_declarations_with_an_implied_any_type: string;
        Variable_0_implicitly_has_an_any_type: string;
        Parameter_0_of_1_implicitly_has_an_any_type: string;
        Parameter_0_of_function_type_implicitly_has_an_any_type: string;
        Member_0_of_object_type_implicitly_has_an_any_type: string;
        new_expression_which_lacks_a_constructor_signature_implicitly_has_an_any_type: string;
        _0_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
        Parameter_0_of_lambda_function_implicitly_has_an_any_type: string;
        Constructor_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
        Lambda_Function_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: string;
        Array_Literal_implicitly_has_an_any_type_from_widening: string;
        _0_which_lacks_get_accessor_and_parameter_type_annotation_on_set_accessor_implicitly_has_an_any_type: string;
        Index_signature_of_object_type_implicitly_has_an_any_type: string;
        Object_literal_s_property_0_implicitly_has_an_any_type_from_widening: string;
    };
}
declare module TypeScript {
    class ArrayUtilities {
        static isArray(value: any): boolean;
        static sequenceEquals<T>(array1: T[], array2: T[], equals: (v1: T, v2: T) => boolean): boolean;
        static contains<T>(array: T[], value: T): boolean;
        static groupBy<T>(array: T[], func: (v: T) => string): any;
        static distinct<T>(array: T[], equalsFn?: (a: T, b: T) => boolean): T[];
        static min<T>(array: T[], func: (v: T) => number): number;
        static max<T>(array: T[], func: (v: T) => number): number;
        static last<T>(array: T[]): T;
        static lastOrDefault<T>(array: T[], predicate: (v: T, index: number) => boolean): T;
        static firstOrDefault<T>(array: T[], func: (v: T, index: number) => boolean): T;
        static first<T>(array: T[], func?: (v: T, index: number) => boolean): T;
        static sum<T>(array: T[], func: (v: T) => number): number;
        static select<T, S>(values: T[], func: (v: T) => S): S[];
        static where<T>(values: T[], func: (v: T) => boolean): T[];
        static any<T>(array: T[], func: (v: T) => boolean): boolean;
        static all<T>(array: T[], func: (v: T) => boolean): boolean;
        static binarySearch(array: number[], value: number): number;
        static createArray<T>(length: number, defaultValue: any): T[];
        static grow<T>(array: T[], length: number, defaultValue: T): void;
        static copy<T>(sourceArray: T[], sourceIndex: number, destinationArray: T[], destinationIndex: number, length: number): void;
        static indexOf<T>(array: T[], predicate: (v: T) => boolean): number;
    }
}
declare module TypeScript {
    interface IBitVector {
        valueAt(index: number): boolean;
        setValueAt(index: number, value: boolean): void;
        release(): void;
    }
    module BitVector {
        function getBitVector(allowUndefinedValues: boolean): IBitVector;
    }
}
declare module TypeScript {
    interface IBitMatrix {
        valueAt(x: number, y: number): boolean;
        setValueAt(x: number, y: number, value: boolean): void;
        release(): void;
    }
    module BitMatrix {
        function getBitMatrix(allowUndefinedValues: boolean): IBitMatrix;
    }
}
declare module TypeScript {
    enum Constants {
        Max31BitInteger = 1073741823,
        Min31BitInteger = -1073741824,
    }
}
declare module TypeScript {
    enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3,
    }
    class Debug {
        private static currentAssertionLevel;
        static shouldAssert(level: AssertionLevel): boolean;
        static assert(expression: any, message?: string, verboseDebugInfo?: () => string): void;
        static fail(message?: string): void;
    }
}
declare module TypeScript {
    var LocalizedDiagnosticMessages: IIndexable<any>;
    class Location {
        private _fileName;
        private _lineMap;
        private _start;
        private _length;
        constructor(fileName: string, lineMap: LineMap, start: number, length: number);
        public fileName(): string;
        public lineMap(): LineMap;
        public line(): number;
        public character(): number;
        public start(): number;
        public length(): number;
        static equals(location1: Location, location2: Location): boolean;
    }
    class Diagnostic extends Location {
        private _diagnosticKey;
        private _arguments;
        private _additionalLocations;
        constructor(fileName: string, lineMap: LineMap, start: number, length: number, diagnosticKey: string, _arguments?: any[], additionalLocations?: Location[]);
        public toJSON(key: any): any;
        public diagnosticKey(): string;
        public arguments(): any[];
        public text(): string;
        public message(): string;
        public additionalLocations(): Location[];
        static equals(diagnostic1: Diagnostic, diagnostic2: Diagnostic): boolean;
        public info(): DiagnosticInfo;
    }
    function newLine(): string;
    function getLocalizedText(diagnosticKey: string, args: any[]): string;
    function getDiagnosticMessage(diagnosticKey: string, args: any[]): string;
}
declare module TypeScript {
    interface DiagnosticInfo {
        category: DiagnosticCategory;
        message: string;
        code: number;
    }
}
declare module TypeScript {
    class Errors {
        static argument(argument: string, message?: string): Error;
        static argumentOutOfRange(argument: string): Error;
        static argumentNull(argument: string): Error;
        static abstract(): Error;
        static notYetImplemented(): Error;
        static invalidOperation(message?: string): Error;
    }
}
declare module TypeScript {
    class Hash {
        private static FNV_BASE;
        private static FNV_PRIME;
        private static computeFnv1aCharArrayHashCode(text, start, len);
        static computeSimple31BitCharArrayHashCode(key: number[], start: number, len: number): number;
        static computeSimple31BitStringHashCode(key: string): number;
        static computeMurmur2StringHashCode(key: string, seed: number): number;
        private static primes;
        static getPrime(min: number): number;
        static expandPrime(oldSize: number): number;
        static combine(value: number, currentHash: number): number;
    }
}
declare module TypeScript.Collections {
    var DefaultHashTableCapacity: number;
    class HashTable<TKey, TValue> {
        private hash;
        private entries;
        private count;
        constructor(capacity: number, hash: (k: TKey) => number);
        public set(key: TKey, value: TValue): void;
        public add(key: TKey, value: TValue): void;
        public containsKey(key: TKey): boolean;
        public get(key: TKey): TValue;
        private computeHashCode(key);
        private addOrSet(key, value, throwOnExistingEntry);
        private findEntry(key, hashCode);
        private addEntry(key, value, hashCode);
        private grow();
    }
    function createHashTable<TKey, TValue>(capacity?: number, hash?: (k: TKey) => number): HashTable<TKey, TValue>;
    function identityHashCode(value: any): number;
}
declare class Enumerator {
    public atEnd(): boolean;
    public moveNext(): boolean;
    public item(): any;
    constructor(o: any);
}
declare module TypeScript {
    var nodeMakeDirectoryTime: number;
    var nodeCreateBufferTime: number;
    var nodeWriteFileSyncTime: number;
    enum ByteOrderMark {
        None = 0,
        Utf8 = 1,
        Utf16BigEndian = 2,
        Utf16LittleEndian = 3,
    }
    class FileInformation {
        public contents: string;
        public byteOrderMark: ByteOrderMark;
        constructor(contents: string, byteOrderMark: ByteOrderMark);
    }
    interface IEnvironment {
        supportsCodePage(): boolean;
        readFile(path: string, codepage: number): FileInformation;
        writeFile(path: string, contents: string, writeByteOrderMark: boolean): void;
        deleteFile(path: string): void;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        listFiles(path: string, re?: RegExp, options?: {
            recursive?: boolean;
        }): string[];
        arguments: string[];
        standardOut: ITextWriter;
        currentDirectory(): string;
        newLine: string;
    }
    var Environment: IEnvironment;
}
declare module TypeScript {
    interface IIndexable<T> {
        [s: string]: T;
    }
}
declare module TypeScript {
    module IntegerUtilities {
        function integerDivide(numerator: number, denominator: number): number;
        function integerMultiplyLow32Bits(n1: number, n2: number): number;
        function integerMultiplyHigh32Bits(n1: number, n2: number): number;
        function isInteger(text: string): boolean;
        function isHexInteger(text: string): boolean;
    }
}
declare module TypeScript {
    interface Iterator<T> {
        moveNext(): boolean;
        current(): T;
    }
}
declare module TypeScript {
    interface ILineAndCharacter {
        line: number;
        character: number;
    }
}
declare module TypeScript {
    class LineMap {
        private _computeLineStarts;
        private length;
        static empty: LineMap;
        private _lineStarts;
        constructor(_computeLineStarts: () => number[], length: number);
        public toJSON(key: any): {
            lineStarts: number[];
            length: number;
        };
        public equals(other: LineMap): boolean;
        public lineStarts(): number[];
        public lineCount(): number;
        public getPosition(line: number, character: number): number;
        public getLineNumberFromPosition(position: number): number;
        public getLineStartPosition(lineNumber: number): number;
        public fillLineAndCharacterFromPosition(position: number, lineAndCharacter: ILineAndCharacter): void;
        public getLineAndCharacterFromPosition(position: number): LineAndCharacter;
    }
}
declare module TypeScript {
    class LineAndCharacter {
        private _line;
        private _character;
        constructor(line: number, character: number);
        public line(): number;
        public character(): number;
    }
}
declare module TypeScript {
    class MathPrototype {
        static max(a: number, b: number): number;
        static min(a: number, b: number): number;
    }
}
declare module TypeScript.Collections {
    var DefaultStringTableCapacity: number;
    class StringTable {
        private entries;
        private count;
        constructor(capacity: number);
        public addCharArray(key: number[], start: number, len: number): string;
        private findCharArrayEntry(key, start, len, hashCode);
        private addEntry(text, hashCode);
        private grow();
        private static textCharArrayEquals(text, array, start, length);
    }
    var DefaultStringTable: StringTable;
}
declare module TypeScript {
    class StringUtilities {
        static isString(value: any): boolean;
        static fromCharCodeArray(array: number[]): string;
        static endsWith(string: string, value: string): boolean;
        static startsWith(string: string, value: string): boolean;
        static copyTo(source: string, sourceIndex: number, destination: number[], destinationIndex: number, count: number): void;
        static repeat(value: string, count: number): string;
        static stringEquals(val1: string, val2: string): boolean;
    }
}
declare module TypeScript {
    class Timer {
        public startTime: number;
        public time: number;
        public start(): void;
        public end(): void;
    }
}
declare module TypeScript {
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
        NoPrefix = 3,
    }
}
declare module TypeScript {
    var diagnosticInformationMap: IIndexable<any>;
}
declare module TypeScript {
    enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        _ = 95,
        $ = 36,
        _0 = 48,
        _7 = 55,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        E = 69,
        F = 70,
        X = 88,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11,
    }
}
declare module TypeScript {
    interface IScriptSnapshot {
        getText(start: number, end: number): string;
        getLength(): number;
        getLineStartPositions(): number[];
        getTextChangeRangeSinceVersion(scriptVersion: number): TextChangeRange;
    }
    module ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
}
declare module TypeScript {
    interface ISimpleText {
        length(): number;
        copyTo(sourceIndex: number, destination: number[], destinationIndex: number, count: number): void;
        substr(start: number, length: number, intern: boolean): string;
        subText(span: TextSpan): ISimpleText;
        charCodeAt(index: number): number;
        lineMap(): LineMap;
    }
    interface IText extends ISimpleText {
        lineCount(): number;
        lines(): ITextLine[];
        charCodeAt(position: number): number;
        getLineFromLineNumber(lineNumber: number): ITextLine;
        getLineFromPosition(position: number): ITextLine;
        getLineNumberFromPosition(position: number): number;
        getLinePosition(position: number): LineAndCharacter;
        toString(span?: TextSpan): string;
    }
}
declare module TypeScript {
    interface ITextLine {
        start(): number;
        end(): number;
        endIncludingLineBreak(): number;
        extent(): TextSpan;
        extentIncludingLineBreak(): TextSpan;
        toString(): string;
        lineNumber(): number;
    }
}
declare module TypeScript {
    module LineMap1 {
        function fromSimpleText(text: ISimpleText): LineMap;
        function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): LineMap;
        function fromString(text: string): LineMap;
    }
}
declare module TypeScript.TextFactory {
    function createText(value: string): IText;
}
declare module TypeScript.SimpleText {
    function fromString(value: string): ISimpleText;
    function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): ISimpleText;
}
declare module TypeScript.TextUtilities {
    interface ICharacterSequence {
        charCodeAt(index: number): number;
        length: number;
    }
    function parseLineStarts(text: ICharacterSequence): number[];
    function getLengthOfLineBreakSlow(text: ICharacterSequence, index: number, c: number): number;
    function getLengthOfLineBreak(text: ICharacterSequence, index: number): number;
    function isAnyLineBreakCharacter(c: number): boolean;
}
declare module TypeScript {
    class TextSpan {
        private _start;
        private _length;
        constructor(start: number, length: number);
        public start(): number;
        public length(): number;
        public end(): number;
        public isEmpty(): boolean;
        public containsPosition(position: number): boolean;
        public containsTextSpan(span: TextSpan): boolean;
        public overlapsWith(span: TextSpan): boolean;
        public overlap(span: TextSpan): TextSpan;
        public intersectsWithTextSpan(span: TextSpan): boolean;
        public intersectsWith(start: number, length: number): boolean;
        public intersectsWithPosition(position: number): boolean;
        public intersection(span: TextSpan): TextSpan;
        static fromBounds(start: number, end: number): TextSpan;
    }
}
declare module TypeScript {
    class TextChangeRange {
        static unchanged: TextChangeRange;
        private _span;
        private _newLength;
        constructor(span: TextSpan, newLength: number);
        public span(): TextSpan;
        public newLength(): number;
        public newSpan(): TextSpan;
        public isUnchanged(): boolean;
        static collapseChangesFromSingleVersion(changes: TextChangeRange[]): TextChangeRange;
        static collapseChangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange;
    }
}
declare module TypeScript {
    class CharacterInfo {
        static isDecimalDigit(c: number): boolean;
        static isOctalDigit(c: number): boolean;
        static isHexDigit(c: number): boolean;
        static hexValue(c: number): number;
        static isWhitespace(ch: number): boolean;
        static isLineTerminator(ch: number): boolean;
    }
}
declare module TypeScript {
    enum SyntaxConstants {
        TriviaNewLineMask = 1,
        TriviaCommentMask = 2,
        TriviaFullWidthShift = 2,
        NodeDataComputed = 1,
        NodeIncrementallyUnusableMask = 2,
        NodeParsedInStrictModeMask = 4,
        NodeFullWidthShift = 3,
        IsVariableWidthKeyword = -2147483648,
    }
}
declare class FormattingOptions {
    public useTabs: boolean;
    public spacesPerTab: number;
    public indentSpaces: number;
    public newLineCharacter: string;
    constructor(useTabs: boolean, spacesPerTab: number, indentSpaces: number, newLineCharacter: string);
    static defaultOptions: FormattingOptions;
}
declare module TypeScript.Indentation {
    function columnForEndOfToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
    function columnForStartOfToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
    function columnForStartOfFirstTokenInLineContainingToken(token: ISyntaxToken, syntaxInformationMap: SyntaxInformationMap, options: FormattingOptions): number;
    function columnForPositionInString(input: string, position: number, options: FormattingOptions): number;
    function indentationString(column: number, options: FormattingOptions): string;
    function indentationTrivia(column: number, options: FormattingOptions): ISyntaxTrivia;
    function firstNonWhitespacePosition(value: string): number;
}
declare module TypeScript {
    enum LanguageVersion {
        EcmaScript3 = 0,
        EcmaScript5 = 1,
    }
}
declare module TypeScript {
    class ParseOptions {
        private _languageVersion;
        private _allowAutomaticSemicolonInsertion;
        constructor(languageVersion: LanguageVersion, allowAutomaticSemicolonInsertion: boolean);
        public toJSON(key: any): {
            allowAutomaticSemicolonInsertion: boolean;
        };
        public languageVersion(): LanguageVersion;
        public allowAutomaticSemicolonInsertion(): boolean;
    }
}
declare module TypeScript {
    class PositionedElement {
        private _parent;
        private _element;
        private _fullStart;
        constructor(parent: PositionedElement, element: ISyntaxElement, fullStart: number);
        static create(parent: PositionedElement, element: ISyntaxElement, fullStart: number): PositionedElement;
        public parent(): PositionedElement;
        public parentElement(): ISyntaxElement;
        public element(): ISyntaxElement;
        public kind(): SyntaxKind;
        public childIndex(child: ISyntaxElement): number;
        public childCount(): number;
        public childAt(index: number): PositionedElement;
        public childStart(child: ISyntaxElement): number;
        public childEnd(child: ISyntaxElement): number;
        public childStartAt(index: number): number;
        public childEndAt(index: number): number;
        public getPositionedChild(child: ISyntaxElement): PositionedElement;
        public fullStart(): number;
        public fullEnd(): number;
        public fullWidth(): number;
        public start(): number;
        public end(): number;
        public root(): PositionedNode;
        public containingNode(): PositionedNode;
    }
    class PositionedNodeOrToken extends PositionedElement {
        constructor(parent: PositionedElement, nodeOrToken: ISyntaxNodeOrToken, fullStart: number);
        public nodeOrToken(): ISyntaxNodeOrToken;
    }
    class PositionedNode extends PositionedNodeOrToken {
        constructor(parent: PositionedElement, node: SyntaxNode, fullStart: number);
        public node(): SyntaxNode;
    }
    class PositionedToken extends PositionedNodeOrToken {
        constructor(parent: PositionedElement, token: ISyntaxToken, fullStart: number);
        public token(): ISyntaxToken;
        public previousToken(includeSkippedTokens?: boolean): PositionedToken;
        public nextToken(includeSkippedTokens?: boolean): PositionedToken;
    }
    class PositionedList extends PositionedElement {
        constructor(parent: PositionedElement, list: ISyntaxList, fullStart: number);
        public list(): ISyntaxList;
    }
    class PositionedSeparatedList extends PositionedElement {
        constructor(parent: PositionedElement, list: ISeparatedSyntaxList, fullStart: number);
        public list(): ISeparatedSyntaxList;
    }
    class PositionedSkippedToken extends PositionedToken {
        private _parentToken;
        constructor(parentToken: PositionedToken, token: ISyntaxToken, fullStart: number);
        public parentToken(): PositionedToken;
        public previousToken(includeSkippedTokens?: boolean): PositionedToken;
        public nextToken(includeSkippedTokens?: boolean): PositionedToken;
    }
}
declare module TypeScript {
    enum SyntaxKind {
        None = 0,
        List = 1,
        SeparatedList = 2,
        TriviaList = 3,
        WhitespaceTrivia = 4,
        NewLineTrivia = 5,
        MultiLineCommentTrivia = 6,
        SingleLineCommentTrivia = 7,
        SkippedTokenTrivia = 8,
        ErrorToken = 9,
        EndOfFileToken = 10,
        IdentifierName = 11,
        RegularExpressionLiteral = 12,
        NumericLiteral = 13,
        StringLiteral = 14,
        BreakKeyword = 15,
        CaseKeyword = 16,
        CatchKeyword = 17,
        ContinueKeyword = 18,
        DebuggerKeyword = 19,
        DefaultKeyword = 20,
        DeleteKeyword = 21,
        DoKeyword = 22,
        ElseKeyword = 23,
        FalseKeyword = 24,
        FinallyKeyword = 25,
        ForKeyword = 26,
        FunctionKeyword = 27,
        IfKeyword = 28,
        InKeyword = 29,
        InstanceOfKeyword = 30,
        NewKeyword = 31,
        NullKeyword = 32,
        ReturnKeyword = 33,
        SwitchKeyword = 34,
        ThisKeyword = 35,
        ThrowKeyword = 36,
        TrueKeyword = 37,
        TryKeyword = 38,
        TypeOfKeyword = 39,
        VarKeyword = 40,
        VoidKeyword = 41,
        WhileKeyword = 42,
        WithKeyword = 43,
        ClassKeyword = 44,
        ConstKeyword = 45,
        EnumKeyword = 46,
        ExportKeyword = 47,
        ExtendsKeyword = 48,
        ImportKeyword = 49,
        SuperKeyword = 50,
        ImplementsKeyword = 51,
        InterfaceKeyword = 52,
        LetKeyword = 53,
        PackageKeyword = 54,
        PrivateKeyword = 55,
        ProtectedKeyword = 56,
        PublicKeyword = 57,
        StaticKeyword = 58,
        YieldKeyword = 59,
        AnyKeyword = 60,
        BooleanKeyword = 61,
        ConstructorKeyword = 62,
        DeclareKeyword = 63,
        GetKeyword = 64,
        ModuleKeyword = 65,
        RequireKeyword = 66,
        NumberKeyword = 67,
        SetKeyword = 68,
        StringKeyword = 69,
        OpenBraceToken = 70,
        CloseBraceToken = 71,
        OpenParenToken = 72,
        CloseParenToken = 73,
        OpenBracketToken = 74,
        CloseBracketToken = 75,
        DotToken = 76,
        DotDotDotToken = 77,
        SemicolonToken = 78,
        CommaToken = 79,
        LessThanToken = 80,
        GreaterThanToken = 81,
        LessThanEqualsToken = 82,
        GreaterThanEqualsToken = 83,
        EqualsEqualsToken = 84,
        EqualsGreaterThanToken = 85,
        ExclamationEqualsToken = 86,
        EqualsEqualsEqualsToken = 87,
        ExclamationEqualsEqualsToken = 88,
        PlusToken = 89,
        MinusToken = 90,
        AsteriskToken = 91,
        PercentToken = 92,
        PlusPlusToken = 93,
        MinusMinusToken = 94,
        LessThanLessThanToken = 95,
        GreaterThanGreaterThanToken = 96,
        GreaterThanGreaterThanGreaterThanToken = 97,
        AmpersandToken = 98,
        BarToken = 99,
        CaretToken = 100,
        ExclamationToken = 101,
        TildeToken = 102,
        AmpersandAmpersandToken = 103,
        BarBarToken = 104,
        QuestionToken = 105,
        ColonToken = 106,
        EqualsToken = 107,
        PlusEqualsToken = 108,
        MinusEqualsToken = 109,
        AsteriskEqualsToken = 110,
        PercentEqualsToken = 111,
        LessThanLessThanEqualsToken = 112,
        GreaterThanGreaterThanEqualsToken = 113,
        GreaterThanGreaterThanGreaterThanEqualsToken = 114,
        AmpersandEqualsToken = 115,
        BarEqualsToken = 116,
        CaretEqualsToken = 117,
        SlashToken = 118,
        SlashEqualsToken = 119,
        SourceUnit = 120,
        QualifiedName = 121,
        ObjectType = 122,
        FunctionType = 123,
        ArrayType = 124,
        ConstructorType = 125,
        GenericType = 126,
        TypeQuery = 127,
        InterfaceDeclaration = 128,
        FunctionDeclaration = 129,
        ModuleDeclaration = 130,
        ClassDeclaration = 131,
        EnumDeclaration = 132,
        ImportDeclaration = 133,
        ExportAssignment = 134,
        MemberFunctionDeclaration = 135,
        MemberVariableDeclaration = 136,
        ConstructorDeclaration = 137,
        IndexMemberDeclaration = 138,
        GetAccessor = 139,
        SetAccessor = 140,
        PropertySignature = 141,
        CallSignature = 142,
        ConstructSignature = 143,
        IndexSignature = 144,
        MethodSignature = 145,
        Block = 146,
        IfStatement = 147,
        VariableStatement = 148,
        ExpressionStatement = 149,
        ReturnStatement = 150,
        SwitchStatement = 151,
        BreakStatement = 152,
        ContinueStatement = 153,
        ForStatement = 154,
        ForInStatement = 155,
        EmptyStatement = 156,
        ThrowStatement = 157,
        WhileStatement = 158,
        TryStatement = 159,
        LabeledStatement = 160,
        DoStatement = 161,
        DebuggerStatement = 162,
        WithStatement = 163,
        PlusExpression = 164,
        NegateExpression = 165,
        BitwiseNotExpression = 166,
        LogicalNotExpression = 167,
        PreIncrementExpression = 168,
        PreDecrementExpression = 169,
        DeleteExpression = 170,
        TypeOfExpression = 171,
        VoidExpression = 172,
        CommaExpression = 173,
        AssignmentExpression = 174,
        AddAssignmentExpression = 175,
        SubtractAssignmentExpression = 176,
        MultiplyAssignmentExpression = 177,
        DivideAssignmentExpression = 178,
        ModuloAssignmentExpression = 179,
        AndAssignmentExpression = 180,
        ExclusiveOrAssignmentExpression = 181,
        OrAssignmentExpression = 182,
        LeftShiftAssignmentExpression = 183,
        SignedRightShiftAssignmentExpression = 184,
        UnsignedRightShiftAssignmentExpression = 185,
        ConditionalExpression = 186,
        LogicalOrExpression = 187,
        LogicalAndExpression = 188,
        BitwiseOrExpression = 189,
        BitwiseExclusiveOrExpression = 190,
        BitwiseAndExpression = 191,
        EqualsWithTypeConversionExpression = 192,
        NotEqualsWithTypeConversionExpression = 193,
        EqualsExpression = 194,
        NotEqualsExpression = 195,
        LessThanExpression = 196,
        GreaterThanExpression = 197,
        LessThanOrEqualExpression = 198,
        GreaterThanOrEqualExpression = 199,
        InstanceOfExpression = 200,
        InExpression = 201,
        LeftShiftExpression = 202,
        SignedRightShiftExpression = 203,
        UnsignedRightShiftExpression = 204,
        MultiplyExpression = 205,
        DivideExpression = 206,
        ModuloExpression = 207,
        AddExpression = 208,
        SubtractExpression = 209,
        PostIncrementExpression = 210,
        PostDecrementExpression = 211,
        MemberAccessExpression = 212,
        InvocationExpression = 213,
        ArrayLiteralExpression = 214,
        ObjectLiteralExpression = 215,
        ObjectCreationExpression = 216,
        ParenthesizedExpression = 217,
        ParenthesizedArrowFunctionExpression = 218,
        SimpleArrowFunctionExpression = 219,
        CastExpression = 220,
        ElementAccessExpression = 221,
        FunctionExpression = 222,
        OmittedExpression = 223,
        VariableDeclaration = 224,
        VariableDeclarator = 225,
        ArgumentList = 226,
        ParameterList = 227,
        TypeArgumentList = 228,
        TypeParameterList = 229,
        ExtendsHeritageClause = 230,
        ImplementsHeritageClause = 231,
        EqualsValueClause = 232,
        CaseSwitchClause = 233,
        DefaultSwitchClause = 234,
        ElseClause = 235,
        CatchClause = 236,
        FinallyClause = 237,
        TypeParameter = 238,
        Constraint = 239,
        SimplePropertyAssignment = 240,
        FunctionPropertyAssignment = 241,
        Parameter = 242,
        EnumElement = 243,
        TypeAnnotation = 244,
        ExternalModuleReference = 245,
        ModuleNameModuleReference = 246,
        Last = 246,
        FirstStandardKeyword = 15,
        LastStandardKeyword = 43,
        FirstFutureReservedKeyword = 44,
        LastFutureReservedKeyword = 50,
        FirstFutureReservedStrictKeyword = 51,
        LastFutureReservedStrictKeyword = 59,
        FirstTypeScriptKeyword = 60,
        LastTypeScriptKeyword = 69,
        FirstKeyword = 15,
        LastKeyword = 69,
        FirstToken = 9,
        LastToken = 119,
        FirstPunctuation = 70,
        LastPunctuation = 119,
        FirstFixedWidth = 15,
        LastFixedWidth = 119,
        FirstTrivia = 4,
        LastTrivia = 8,
    }
}
declare module TypeScript.SyntaxFacts {
    function getTokenKind(text: string): SyntaxKind;
    function getText(kind: SyntaxKind): string;
    function isTokenKind(kind: SyntaxKind): boolean;
    function isAnyKeyword(kind: SyntaxKind): boolean;
    function isStandardKeyword(kind: SyntaxKind): boolean;
    function isFutureReservedKeyword(kind: SyntaxKind): boolean;
    function isFutureReservedStrictKeyword(kind: SyntaxKind): boolean;
    function isAnyPunctuation(kind: SyntaxKind): boolean;
    function isPrefixUnaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
    function isBinaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
    function getPrefixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getPostfixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getBinaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getOperatorTokenFromBinaryExpression(tokenKind: SyntaxKind): SyntaxKind;
    function isAnyDivideToken(kind: SyntaxKind): boolean;
    function isAnyDivideOrRegularExpressionToken(kind: SyntaxKind): boolean;
}
declare module TypeScript {
    class Scanner implements ISlidingWindowSource {
        private slidingWindow;
        private fileName;
        private text;
        private _languageVersion;
        constructor(fileName: string, text: ISimpleText, languageVersion: LanguageVersion, window?: number[]);
        public languageVersion(): LanguageVersion;
        public fetchMoreItems(argument: any, sourceIndex: number, window: number[], destinationIndex: number, spaceAvailable: number): number;
        private currentCharCode();
        public absoluteIndex(): number;
        public setAbsoluteIndex(index: number): void;
        public scan(diagnostics: Diagnostic[], allowRegularExpression: boolean): ISyntaxToken;
        private createToken(fullStart, leadingTriviaInfo, start, kind, end, fullEnd, trailingTriviaInfo, isVariableWidthKeyword);
        private static triviaWindow;
        static scanTrivia(text: ISimpleText, start: number, length: number, isTrailing: boolean): ISyntaxTriviaList;
        private scanTrivia(underlyingText, underlyingTextStart, isTrailing);
        private scanTriviaInfo(diagnostics, isTrailing);
        private isNewLineCharacter(ch);
        private scanWhitespaceTrivia(underlyingText, underlyingTextStart);
        private scanSingleLineCommentTrivia(underlyingText, underlyingTextStart);
        private scanSingleLineCommentTriviaLength();
        private scanMultiLineCommentTrivia(underlyingText, underlyingTextStart);
        private scanMultiLineCommentTriviaLength(diagnostics);
        private scanLineTerminatorSequenceTrivia(ch);
        private scanLineTerminatorSequenceLength(ch);
        private scanSyntaxToken(diagnostics, allowRegularExpression);
        private isIdentifierStart(interpretedChar);
        private isIdentifierPart(interpretedChar);
        private tryFastScanIdentifierOrKeyword(firstCharacter);
        private slowScanIdentifierOrKeyword(diagnostics);
        private scanNumericLiteral(diagnostics);
        private isOctalNumericLiteral();
        private scanOctalNumericLiteral(diagnostics);
        private scanDecimalDigits();
        private scanDecimalNumericLiteral();
        private scanHexNumericLiteral();
        private isHexNumericLiteral();
        private advanceAndSetTokenKind(kind);
        private scanLessThanToken();
        private scanBarToken();
        private scanCaretToken();
        private scanAmpersandToken();
        private scanPercentToken();
        private scanMinusToken();
        private scanPlusToken();
        private scanAsteriskToken();
        private scanEqualsToken();
        private isDotPrefixedNumericLiteral();
        private scanDotToken(diagnostics);
        private scanSlashToken(allowRegularExpression);
        private tryScanRegularExpressionToken();
        private scanExclamationToken();
        private scanDefaultCharacter(character, diagnostics);
        private getErrorMessageText(text);
        private skipEscapeSequence(diagnostics);
        private scanStringLiteral(diagnostics);
        private isUnicodeEscape(character);
        private peekCharOrUnicodeEscape();
        private peekUnicodeOrHexEscape();
        private scanCharOrUnicodeEscape(errors);
        private scanUnicodeOrHexEscape(errors);
        public substring(start: number, end: number, intern: boolean): string;
        private createIllegalEscapeDiagnostic(start, end);
        static isValidIdentifier(text: ISimpleText, languageVersion: LanguageVersion): boolean;
    }
}
declare module TypeScript {
    class ScannerUtilities {
        static identifierKind(array: number[], startIndex: number, length: number): SyntaxKind;
    }
}
declare module TypeScript {
    interface ISeparatedSyntaxList extends ISyntaxElement {
        childAt(index: number): ISyntaxNodeOrToken;
        toArray(): ISyntaxNodeOrToken[];
        toNonSeparatorArray(): ISyntaxNodeOrToken[];
        separatorCount(): number;
        separatorAt(index: number): ISyntaxToken;
        nonSeparatorCount(): number;
        nonSeparatorAt(index: number): ISyntaxNodeOrToken;
        insertChildrenInto(array: ISyntaxElement[], index: number): void;
    }
}
declare module TypeScript.Syntax {
    var emptySeparatedList: ISeparatedSyntaxList;
    function separatedList(nodes: ISyntaxNodeOrToken[]): ISeparatedSyntaxList;
}
declare module TypeScript {
    interface ISlidingWindowSource {
        fetchMoreItems(argument: any, sourceIndex: number, window: any[], destinationIndex: number, spaceAvailable: number): number;
    }
    class SlidingWindow {
        private source;
        public window: any[];
        private defaultValue;
        private sourceLength;
        public windowCount: number;
        public windowAbsoluteStartIndex: number;
        public currentRelativeItemIndex: number;
        private _pinCount;
        private firstPinnedAbsoluteIndex;
        constructor(source: ISlidingWindowSource, window: any[], defaultValue: any, sourceLength?: number);
        private windowAbsoluteEndIndex();
        private addMoreItemsToWindow(argument);
        private tryShiftOrGrowWindow();
        public absoluteIndex(): number;
        public isAtEndOfSource(): boolean;
        public getAndPinAbsoluteIndex(): number;
        public releaseAndUnpinAbsoluteIndex(absoluteIndex: number): void;
        public rewindToPinnedIndex(absoluteIndex: number): void;
        public currentItem(argument: any): any;
        public peekItemN(n: number): any;
        public moveToNextItem(): void;
        public disgardAllItemsFromCurrentIndexOnwards(): void;
        public setAbsoluteIndex(absoluteIndex: number): void;
        public pinCount(): number;
    }
}
declare module TypeScript {
}
declare module TypeScript.Syntax {
    function emptySourceUnit(): SourceUnitSyntax;
    function getStandaloneExpression(positionedToken: PositionedToken): PositionedNodeOrToken;
    function isInModuleOrTypeContext(positionedToken: PositionedToken): boolean;
    function isInTypeOnlyContext(positionedToken: PositionedToken): boolean;
    function childOffset(parent: ISyntaxElement, child: ISyntaxElement): number;
    function childOffsetAt(parent: ISyntaxElement, index: number): number;
    function childIndex(parent: ISyntaxElement, child: ISyntaxElement): number;
    function nodeStructuralEquals(node1: SyntaxNode, node2: SyntaxNode): boolean;
    function nodeOrTokenStructuralEquals(node1: ISyntaxNodeOrToken, node2: ISyntaxNodeOrToken): boolean;
    function tokenStructuralEquals(token1: ISyntaxToken, token2: ISyntaxToken): boolean;
    function triviaListStructuralEquals(triviaList1: ISyntaxTriviaList, triviaList2: ISyntaxTriviaList): boolean;
    function triviaStructuralEquals(trivia1: ISyntaxTrivia, trivia2: ISyntaxTrivia): boolean;
    function listStructuralEquals(list1: ISyntaxList, list2: ISyntaxList): boolean;
    function separatedListStructuralEquals(list1: ISeparatedSyntaxList, list2: ISeparatedSyntaxList): boolean;
    function elementStructuralEquals(element1: ISyntaxElement, element2: ISyntaxElement): boolean;
    function identifierName(text: string, info?: ITokenInfo): ISyntaxToken;
    function trueExpression(): IUnaryExpressionSyntax;
    function falseExpression(): IUnaryExpressionSyntax;
    function numericLiteralExpression(text: string): IUnaryExpressionSyntax;
    function stringLiteralExpression(text: string): IUnaryExpressionSyntax;
    function isSuperInvocationExpression(node: IExpressionSyntax): boolean;
    function isSuperInvocationExpressionStatement(node: SyntaxNode): boolean;
    function isSuperMemberAccessExpression(node: IExpressionSyntax): boolean;
    function isSuperMemberAccessInvocationExpression(node: SyntaxNode): boolean;
    function assignmentExpression(left: IExpressionSyntax, token: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
    function nodeHasSkippedOrMissingTokens(node: SyntaxNode): boolean;
    function isUnterminatedStringLiteral(token: ISyntaxToken): boolean;
    function isUnterminatedMultilineCommentTrivia(trivia: ISyntaxTrivia): boolean;
    function isEntirelyInsideCommentTrivia(trivia: ISyntaxTrivia, fullStart: number, position: number): boolean;
    function isEntirelyInsideComment(sourceUnit: SourceUnitSyntax, position: number): boolean;
    function isEntirelyInStringOrRegularExpressionLiteral(sourceUnit: SourceUnitSyntax, position: number): boolean;
    function findSkippedTokenInLeadingTriviaList(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
    function findSkippedTokenInTrailingTriviaList(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
    function findSkippedTokenInPositionedToken(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
    function findSkippedTokenOnLeft(positionedToken: PositionedToken, position: number): PositionedSkippedToken;
    function getAncestorOfKind(positionedToken: PositionedElement, kind: SyntaxKind): PositionedElement;
    function hasAncestorOfKind(positionedToken: PositionedElement, kind: SyntaxKind): boolean;
    function isIntegerLiteral(expression: IExpressionSyntax): boolean;
}
declare module TypeScript {
    interface ISyntaxElement {
        kind(): SyntaxKind;
        isNode(): boolean;
        isToken(): boolean;
        isList(): boolean;
        isSeparatedList(): boolean;
        childCount(): number;
        childAt(index: number): ISyntaxElement;
        isTypeScriptSpecific(): boolean;
        isIncrementallyUnusable(): boolean;
        fullWidth(): number;
        width(): number;
        fullText(): string;
        leadingTrivia(): ISyntaxTriviaList;
        trailingTrivia(): ISyntaxTriviaList;
        leadingTriviaWidth(): number;
        trailingTriviaWidth(): number;
        firstToken(): ISyntaxToken;
        lastToken(): ISyntaxToken;
        collectTextElements(elements: string[]): void;
    }
    interface ISyntaxNode extends ISyntaxNodeOrToken {
    }
    interface IModuleReferenceSyntax extends ISyntaxNode {
        isModuleReference(): boolean;
    }
    interface IModuleElementSyntax extends ISyntaxNode {
    }
    interface IStatementSyntax extends IModuleElementSyntax {
        isStatement(): boolean;
    }
    interface IIterationStatementSyntax extends IStatementSyntax {
        isIterationStatement(): boolean;
    }
    interface ITypeMemberSyntax extends ISyntaxNode {
    }
    interface IClassElementSyntax extends ISyntaxNode {
    }
    interface IMemberDeclarationSyntax extends IClassElementSyntax {
    }
    interface IPropertyAssignmentSyntax extends IClassElementSyntax {
    }
    interface ISwitchClauseSyntax extends ISyntaxNode {
        isSwitchClause(): boolean;
        statements: ISyntaxList;
    }
    interface IExpressionSyntax extends ISyntaxNodeOrToken {
        isExpression(): boolean;
        withLeadingTrivia(trivia: ISyntaxTriviaList): IExpressionSyntax;
        withTrailingTrivia(trivia: ISyntaxTriviaList): IExpressionSyntax;
    }
    interface IUnaryExpressionSyntax extends IExpressionSyntax {
        isUnaryExpression(): boolean;
    }
    interface IArrowFunctionExpressionSyntax extends IUnaryExpressionSyntax {
        isArrowFunctionExpression(): boolean;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
    }
    interface IPostfixExpressionSyntax extends IUnaryExpressionSyntax {
        isPostfixExpression(): boolean;
    }
    interface IMemberExpressionSyntax extends IPostfixExpressionSyntax {
        isMemberExpression(): boolean;
    }
    interface IPrimaryExpressionSyntax extends IMemberExpressionSyntax {
        isPrimaryExpression(): boolean;
    }
    interface ITypeSyntax extends ISyntaxNodeOrToken {
    }
    interface INameSyntax extends ITypeSyntax {
    }
}
declare module TypeScript.Syntax {
    interface IFactory {
        sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
        importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
        classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
        moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
        variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
        variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
        equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
        prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
        arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        omittedExpression(): OmittedExpressionSyntax;
        parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
        parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
        typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
        functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
        objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
        genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
        typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
        typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
        block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
        parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
        memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
        postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
        elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
        argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
        binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
        conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
        methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
        propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
        callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
        parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
        typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
        constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
        elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
        ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
        expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
        constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
        memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
        getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
        setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
        memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
        returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
        switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
        defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
        breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
        continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
        forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
        whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
        withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
        enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
        castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
        functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
        emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
        tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
        catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
        finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
        labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
        doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
        typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
    }
    class NormalModeFactory implements IFactory {
        public sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        public externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        public moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
        public importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        public exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
        public classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        public interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        public heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
        public moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        public functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
        public variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
        public variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        public variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
        public equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
        public prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
        public arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        public omittedExpression(): OmittedExpressionSyntax;
        public parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        public simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
        public parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        public qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
        public typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        public constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
        public functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
        public objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        public arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
        public genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
        public typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
        public typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
        public block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
        public parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
        public memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
        public postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
        public elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        public invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
        public argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
        public binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
        public conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        public constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
        public methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        public indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
        public propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
        public callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
        public parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
        public typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        public typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
        public constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
        public elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
        public ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
        public expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
        public constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
        public memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
        public setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
        public memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        public indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        public throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
        public returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        public objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
        public switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        public caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
        public defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
        public breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
        public continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        public forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
        public forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
        public whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
        public withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
        public enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        public enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
        public castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        public objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        public simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        public functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
        public functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
        public emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
        public tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
        public catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
        public finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
        public labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
        public doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
        public typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        public deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        public voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        public debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
    }
    class StrictModeFactory implements IFactory {
        public sourceUnit(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        public externalModuleReference(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        public moduleNameModuleReference(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
        public importDeclaration(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        public exportAssignment(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
        public classDeclaration(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        public interfaceDeclaration(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        public heritageClause(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
        public moduleDeclaration(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        public functionDeclaration(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
        public variableStatement(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
        public variableDeclaration(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        public variableDeclarator(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
        public equalsValueClause(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
        public prefixUnaryExpression(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
        public arrayLiteralExpression(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        public omittedExpression(): OmittedExpressionSyntax;
        public parenthesizedExpression(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        public simpleArrowFunctionExpression(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
        public parenthesizedArrowFunctionExpression(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        public qualifiedName(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
        public typeArgumentList(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        public constructorType(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
        public functionType(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
        public objectType(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        public arrayType(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
        public genericType(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
        public typeQuery(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
        public typeAnnotation(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
        public block(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
        public parameter(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
        public memberAccessExpression(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
        public postfixUnaryExpression(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
        public elementAccessExpression(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        public invocationExpression(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
        public argumentList(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
        public binaryExpression(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
        public conditionalExpression(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        public constructSignature(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
        public methodSignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        public indexSignature(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
        public propertySignature(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
        public callSignature(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
        public parameterList(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
        public typeParameterList(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        public typeParameter(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
        public constraint(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
        public elseClause(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
        public ifStatement(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
        public expressionStatement(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
        public constructorDeclaration(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
        public memberFunctionDeclaration(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public getAccessor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
        public setAccessor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
        public memberVariableDeclaration(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        public indexMemberDeclaration(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        public throwStatement(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
        public returnStatement(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        public objectCreationExpression(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
        public switchStatement(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        public caseSwitchClause(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
        public defaultSwitchClause(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
        public breakStatement(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
        public continueStatement(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        public forStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
        public forInStatement(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
        public whileStatement(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
        public withStatement(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
        public enumDeclaration(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        public enumElement(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
        public castExpression(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        public objectLiteralExpression(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        public simplePropertyAssignment(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        public functionPropertyAssignment(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
        public functionExpression(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
        public emptyStatement(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
        public tryStatement(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
        public catchClause(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
        public finallyClause(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
        public labeledStatement(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
        public doStatement(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
        public typeOfExpression(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        public deleteExpression(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        public voidExpression(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        public debuggerStatement(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
    }
    var normalModeFactory: IFactory;
    var strictModeFactory: IFactory;
}
declare module TypeScript.SyntaxFacts {
    function isDirectivePrologueElement(node: ISyntaxNodeOrToken): boolean;
    function isUseStrictDirective(node: ISyntaxNodeOrToken): boolean;
    function isIdentifierNameOrAnyKeyword(token: ISyntaxToken): boolean;
}
declare module TypeScript {
    interface ISyntaxList extends ISyntaxElement {
        childAt(index: number): ISyntaxNodeOrToken;
        toArray(): ISyntaxNodeOrToken[];
        insertChildrenInto(array: ISyntaxElement[], index: number): void;
    }
}
declare module TypeScript.Syntax {
    class EmptySyntaxList implements ISyntaxList {
        public kind(): SyntaxKind;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public toJSON(key: any): any;
        public childCount(): number;
        public childAt(index: number): ISyntaxNodeOrToken;
        public toArray(): ISyntaxNodeOrToken[];
        public collectTextElements(elements: string[]): void;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public fullWidth(): number;
        public width(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public trailingTrivia(): ISyntaxTriviaList;
        public leadingTriviaWidth(): number;
        public trailingTriviaWidth(): number;
        public fullText(): string;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public findTokenInternal(parent: PositionedElement, position: number, fullStart: number): PositionedToken;
        public insertChildrenInto(array: ISyntaxElement[], index: number): void;
    }
    var emptyList: ISyntaxList;
    function list(nodes: ISyntaxNodeOrToken[]): ISyntaxList;
}
declare module TypeScript {
    class SyntaxNode implements ISyntaxNodeOrToken {
        private _data;
        constructor(parsedInStrictMode: boolean);
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public insertChildrenInto(array: ISyntaxElement[], index: number): void;
        public leadingTrivia(): ISyntaxTriviaList;
        public trailingTrivia(): ISyntaxTriviaList;
        public toJSON(key: any): any;
        public accept(visitor: ISyntaxVisitor): any;
        public fullText(): string;
        public collectTextElements(elements: string[]): void;
        public replaceToken(token1: ISyntaxToken, token2: ISyntaxToken): SyntaxNode;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SyntaxNode;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SyntaxNode;
        public hasLeadingTrivia(): boolean;
        public hasTrailingTrivia(): boolean;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public parsedInStrictMode(): boolean;
        public fullWidth(): number;
        private computeData();
        private data();
        public findToken(position: number, includeSkippedTokens?: boolean): PositionedToken;
        private tryGetEndOfFileAt(position);
        private findTokenInternal(parent, position, fullStart);
        public findTokenOnLeft(position: number, includeSkippedTokens?: boolean): PositionedToken;
        public findCompleteTokenOnLeft(position: number, includeSkippedTokens?: boolean): PositionedToken;
        public isModuleElement(): boolean;
        public isClassElement(): boolean;
        public isTypeMember(): boolean;
        public isStatement(): boolean;
        public isExpression(): boolean;
        public isSwitchClause(): boolean;
        public structuralEquals(node: SyntaxNode): boolean;
        public width(): number;
        public leadingTriviaWidth(): number;
        public trailingTriviaWidth(): number;
    }
}
declare module TypeScript {
    interface ISyntaxNodeOrToken extends ISyntaxElement {
        withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxNodeOrToken;
        withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxNodeOrToken;
        accept(visitor: ISyntaxVisitor): any;
    }
}
declare module TypeScript {
    class SourceUnitSyntax extends SyntaxNode {
        public moduleElements: ISyntaxList;
        public endOfFileToken: ISyntaxToken;
        constructor(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(moduleElements: ISyntaxList, endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        static create(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        static create1(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SourceUnitSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SourceUnitSyntax;
        public withModuleElements(moduleElements: ISyntaxList): SourceUnitSyntax;
        public withModuleElement(moduleElement: IModuleElementSyntax): SourceUnitSyntax;
        public withEndOfFileToken(endOfFileToken: ISyntaxToken): SourceUnitSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ExternalModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
        public requireKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public stringLiteral: ISyntaxToken;
        public closeParenToken: ISyntaxToken;
        constructor(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleReference(): boolean;
        public update(requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        static create1(stringLiteral: ISyntaxToken): ExternalModuleReferenceSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ExternalModuleReferenceSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ExternalModuleReferenceSyntax;
        public withRequireKeyword(requireKeyword: ISyntaxToken): ExternalModuleReferenceSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        public withStringLiteral(stringLiteral: ISyntaxToken): ExternalModuleReferenceSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ModuleNameModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
        public moduleName: INameSyntax;
        constructor(moduleName: INameSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleReference(): boolean;
        public update(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ModuleNameModuleReferenceSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ModuleNameModuleReferenceSyntax;
        public withModuleName(moduleName: INameSyntax): ModuleNameModuleReferenceSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ImportDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        public modifiers: ISyntaxList;
        public importKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public equalsToken: ISyntaxToken;
        public moduleReference: IModuleReferenceSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        static create(importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        static create1(identifier: ISyntaxToken, moduleReference: IModuleReferenceSyntax): ImportDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ImportDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ImportDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): ImportDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): ImportDeclarationSyntax;
        public withImportKeyword(importKeyword: ISyntaxToken): ImportDeclarationSyntax;
        public withIdentifier(identifier: ISyntaxToken): ImportDeclarationSyntax;
        public withEqualsToken(equalsToken: ISyntaxToken): ImportDeclarationSyntax;
        public withModuleReference(moduleReference: IModuleReferenceSyntax): ImportDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ImportDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ExportAssignmentSyntax extends SyntaxNode implements IModuleElementSyntax {
        public exportKeyword: ISyntaxToken;
        public equalsToken: ISyntaxToken;
        public identifier: ISyntaxToken;
        public semicolonToken: ISyntaxToken;
        constructor(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
        static create1(identifier: ISyntaxToken): ExportAssignmentSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ExportAssignmentSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ExportAssignmentSyntax;
        public withExportKeyword(exportKeyword: ISyntaxToken): ExportAssignmentSyntax;
        public withEqualsToken(equalsToken: ISyntaxToken): ExportAssignmentSyntax;
        public withIdentifier(identifier: ISyntaxToken): ExportAssignmentSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ExportAssignmentSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ClassDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        public modifiers: ISyntaxList;
        public classKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public typeParameterList: TypeParameterListSyntax;
        public heritageClauses: ISyntaxList;
        public openBraceToken: ISyntaxToken;
        public classElements: ISyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, openBraceToken: ISyntaxToken, classElements: ISyntaxList, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        static create(classKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        static create1(identifier: ISyntaxToken): ClassDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ClassDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ClassDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): ClassDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): ClassDeclarationSyntax;
        public withClassKeyword(classKeyword: ISyntaxToken): ClassDeclarationSyntax;
        public withIdentifier(identifier: ISyntaxToken): ClassDeclarationSyntax;
        public withTypeParameterList(typeParameterList: TypeParameterListSyntax): ClassDeclarationSyntax;
        public withHeritageClauses(heritageClauses: ISyntaxList): ClassDeclarationSyntax;
        public withHeritageClause(heritageClause: HeritageClauseSyntax): ClassDeclarationSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        public withClassElements(classElements: ISyntaxList): ClassDeclarationSyntax;
        public withClassElement(classElement: IClassElementSyntax): ClassDeclarationSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): ClassDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class InterfaceDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        public modifiers: ISyntaxList;
        public interfaceKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public typeParameterList: TypeParameterListSyntax;
        public heritageClauses: ISyntaxList;
        public body: ObjectTypeSyntax;
        constructor(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: ISyntaxList, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        static create(interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        static create1(identifier: ISyntaxToken): InterfaceDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): InterfaceDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): InterfaceDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): InterfaceDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): InterfaceDeclarationSyntax;
        public withInterfaceKeyword(interfaceKeyword: ISyntaxToken): InterfaceDeclarationSyntax;
        public withIdentifier(identifier: ISyntaxToken): InterfaceDeclarationSyntax;
        public withTypeParameterList(typeParameterList: TypeParameterListSyntax): InterfaceDeclarationSyntax;
        public withHeritageClauses(heritageClauses: ISyntaxList): InterfaceDeclarationSyntax;
        public withHeritageClause(heritageClause: HeritageClauseSyntax): InterfaceDeclarationSyntax;
        public withBody(body: ObjectTypeSyntax): InterfaceDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class HeritageClauseSyntax extends SyntaxNode {
        public extendsOrImplementsKeyword: ISyntaxToken;
        public typeNames: ISeparatedSyntaxList;
        private _kind;
        constructor(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public kind(): SyntaxKind;
        public update(kind: SyntaxKind, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): HeritageClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): HeritageClauseSyntax;
        public withKind(kind: SyntaxKind): HeritageClauseSyntax;
        public withExtendsOrImplementsKeyword(extendsOrImplementsKeyword: ISyntaxToken): HeritageClauseSyntax;
        public withTypeNames(typeNames: ISeparatedSyntaxList): HeritageClauseSyntax;
        public withTypeName(typeName: INameSyntax): HeritageClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ModuleDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        public modifiers: ISyntaxList;
        public moduleKeyword: ISyntaxToken;
        public name: INameSyntax;
        public stringLiteral: ISyntaxToken;
        public openBraceToken: ISyntaxToken;
        public moduleElements: ISyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: ISyntaxList, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        static create(moduleKeyword: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        static create1(): ModuleDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ModuleDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ModuleDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): ModuleDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): ModuleDeclarationSyntax;
        public withModuleKeyword(moduleKeyword: ISyntaxToken): ModuleDeclarationSyntax;
        public withName(name: INameSyntax): ModuleDeclarationSyntax;
        public withStringLiteral(stringLiteral: ISyntaxToken): ModuleDeclarationSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        public withModuleElements(moduleElements: ISyntaxList): ModuleDeclarationSyntax;
        public withModuleElement(moduleElement: IModuleElementSyntax): ModuleDeclarationSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class FunctionDeclarationSyntax extends SyntaxNode implements IStatementSyntax {
        public modifiers: ISyntaxList;
        public functionKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        public block: BlockSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
        static create(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax): FunctionDeclarationSyntax;
        static create1(identifier: ISyntaxToken): FunctionDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): FunctionDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): FunctionDeclarationSyntax;
        public withFunctionKeyword(functionKeyword: ISyntaxToken): FunctionDeclarationSyntax;
        public withIdentifier(identifier: ISyntaxToken): FunctionDeclarationSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): FunctionDeclarationSyntax;
        public withBlock(block: BlockSyntax): FunctionDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): FunctionDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class VariableStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public modifiers: ISyntaxList;
        public variableDeclaration: VariableDeclarationSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
        static create(variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax;
        static create1(variableDeclaration: VariableDeclarationSyntax): VariableStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableStatementSyntax;
        public withModifiers(modifiers: ISyntaxList): VariableStatementSyntax;
        public withModifier(modifier: ISyntaxToken): VariableStatementSyntax;
        public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): VariableStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): VariableStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class VariableDeclarationSyntax extends SyntaxNode {
        public varKeyword: ISyntaxToken;
        public variableDeclarators: ISeparatedSyntaxList;
        constructor(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        static create1(variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableDeclarationSyntax;
        public withVarKeyword(varKeyword: ISyntaxToken): VariableDeclarationSyntax;
        public withVariableDeclarators(variableDeclarators: ISeparatedSyntaxList): VariableDeclarationSyntax;
        public withVariableDeclarator(variableDeclarator: VariableDeclaratorSyntax): VariableDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class VariableDeclaratorSyntax extends SyntaxNode {
        public propertyName: ISyntaxToken;
        public typeAnnotation: TypeAnnotationSyntax;
        public equalsValueClause: EqualsValueClauseSyntax;
        constructor(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
        static create(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
        static create1(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): VariableDeclaratorSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): VariableDeclaratorSyntax;
        public withPropertyName(propertyName: ISyntaxToken): VariableDeclaratorSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): VariableDeclaratorSyntax;
        public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class EqualsValueClauseSyntax extends SyntaxNode {
        public equalsToken: ISyntaxToken;
        public value: IExpressionSyntax;
        constructor(equalsToken: ISyntaxToken, value: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax;
        static create1(value: IExpressionSyntax): EqualsValueClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): EqualsValueClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): EqualsValueClauseSyntax;
        public withEqualsToken(equalsToken: ISyntaxToken): EqualsValueClauseSyntax;
        public withValue(value: IExpressionSyntax): EqualsValueClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class PrefixUnaryExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        public operatorToken: ISyntaxToken;
        public operand: IUnaryExpressionSyntax;
        private _kind;
        constructor(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public kind(): SyntaxKind;
        public update(kind: SyntaxKind, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): PrefixUnaryExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): PrefixUnaryExpressionSyntax;
        public withKind(kind: SyntaxKind): PrefixUnaryExpressionSyntax;
        public withOperatorToken(operatorToken: ISyntaxToken): PrefixUnaryExpressionSyntax;
        public withOperand(operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ArrayLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        public openBracketToken: ISyntaxToken;
        public expressions: ISeparatedSyntaxList;
        public closeBracketToken: ISyntaxToken;
        constructor(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        static create(openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        static create1(): ArrayLiteralExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ArrayLiteralExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ArrayLiteralExpressionSyntax;
        public withOpenBracketToken(openBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        public withExpressions(expressions: ISeparatedSyntaxList): ArrayLiteralExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): ArrayLiteralExpressionSyntax;
        public withCloseBracketToken(closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class OmittedExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        constructor(parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isExpression(): boolean;
        public update(): OmittedExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): OmittedExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): OmittedExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ParenthesizedExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        public openParenToken: ISyntaxToken;
        public expression: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        constructor(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        static create1(expression: IExpressionSyntax): ParenthesizedExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ParenthesizedExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ParenthesizedExpressionSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): ParenthesizedExpressionSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class SimpleArrowFunctionExpressionSyntax extends SyntaxNode implements IArrowFunctionExpressionSyntax {
        public identifier: ISyntaxToken;
        public equalsGreaterThanToken: ISyntaxToken;
        public block: BlockSyntax;
        public expression: IExpressionSyntax;
        constructor(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isArrowFunctionExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
        static create(identifier: ISyntaxToken, equalsGreaterThanToken: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
        static create1(identifier: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SimpleArrowFunctionExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SimpleArrowFunctionExpressionSyntax;
        public withIdentifier(identifier: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
        public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): SimpleArrowFunctionExpressionSyntax;
        public withBlock(block: BlockSyntax): SimpleArrowFunctionExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ParenthesizedArrowFunctionExpressionSyntax extends SyntaxNode implements IArrowFunctionExpressionSyntax {
        public callSignature: CallSignatureSyntax;
        public equalsGreaterThanToken: ISyntaxToken;
        public block: BlockSyntax;
        public expression: IExpressionSyntax;
        constructor(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isArrowFunctionExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        static create(callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken): ParenthesizedArrowFunctionExpressionSyntax;
        static create1(): ParenthesizedArrowFunctionExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ParenthesizedArrowFunctionExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ParenthesizedArrowFunctionExpressionSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): ParenthesizedArrowFunctionExpressionSyntax;
        public withBlock(block: BlockSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class QualifiedNameSyntax extends SyntaxNode implements INameSyntax {
        public left: INameSyntax;
        public dotToken: ISyntaxToken;
        public right: ISyntaxToken;
        constructor(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isName(): boolean;
        public isType(): boolean;
        public update(left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax;
        static create1(left: INameSyntax, right: ISyntaxToken): QualifiedNameSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): QualifiedNameSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): QualifiedNameSyntax;
        public withLeft(left: INameSyntax): QualifiedNameSyntax;
        public withDotToken(dotToken: ISyntaxToken): QualifiedNameSyntax;
        public withRight(right: ISyntaxToken): QualifiedNameSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeArgumentListSyntax extends SyntaxNode {
        public lessThanToken: ISyntaxToken;
        public typeArguments: ISeparatedSyntaxList;
        public greaterThanToken: ISyntaxToken;
        constructor(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        static create(lessThanToken: ISyntaxToken, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        static create1(): TypeArgumentListSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeArgumentListSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeArgumentListSyntax;
        public withLessThanToken(lessThanToken: ISyntaxToken): TypeArgumentListSyntax;
        public withTypeArguments(typeArguments: ISeparatedSyntaxList): TypeArgumentListSyntax;
        public withTypeArgument(typeArgument: ITypeSyntax): TypeArgumentListSyntax;
        public withGreaterThanToken(greaterThanToken: ISyntaxToken): TypeArgumentListSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ConstructorTypeSyntax extends SyntaxNode implements ITypeSyntax {
        public newKeyword: ISyntaxToken;
        public typeParameterList: TypeParameterListSyntax;
        public parameterList: ParameterListSyntax;
        public equalsGreaterThanToken: ISyntaxToken;
        public type: ITypeSyntax;
        constructor(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
        static create(newKeyword: ISyntaxToken, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax;
        static create1(type: ITypeSyntax): ConstructorTypeSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructorTypeSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructorTypeSyntax;
        public withNewKeyword(newKeyword: ISyntaxToken): ConstructorTypeSyntax;
        public withTypeParameterList(typeParameterList: TypeParameterListSyntax): ConstructorTypeSyntax;
        public withParameterList(parameterList: ParameterListSyntax): ConstructorTypeSyntax;
        public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): ConstructorTypeSyntax;
        public withType(type: ITypeSyntax): ConstructorTypeSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class FunctionTypeSyntax extends SyntaxNode implements ITypeSyntax {
        public typeParameterList: TypeParameterListSyntax;
        public parameterList: ParameterListSyntax;
        public equalsGreaterThanToken: ISyntaxToken;
        public type: ITypeSyntax;
        constructor(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
        static create(parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax;
        static create1(type: ITypeSyntax): FunctionTypeSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionTypeSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionTypeSyntax;
        public withTypeParameterList(typeParameterList: TypeParameterListSyntax): FunctionTypeSyntax;
        public withParameterList(parameterList: ParameterListSyntax): FunctionTypeSyntax;
        public withEqualsGreaterThanToken(equalsGreaterThanToken: ISyntaxToken): FunctionTypeSyntax;
        public withType(type: ITypeSyntax): FunctionTypeSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ObjectTypeSyntax extends SyntaxNode implements ITypeSyntax {
        public openBraceToken: ISyntaxToken;
        public typeMembers: ISeparatedSyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        static create1(): ObjectTypeSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectTypeSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectTypeSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): ObjectTypeSyntax;
        public withTypeMembers(typeMembers: ISeparatedSyntaxList): ObjectTypeSyntax;
        public withTypeMember(typeMember: ITypeMemberSyntax): ObjectTypeSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): ObjectTypeSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ArrayTypeSyntax extends SyntaxNode implements ITypeSyntax {
        public type: ITypeSyntax;
        public openBracketToken: ISyntaxToken;
        public closeBracketToken: ISyntaxToken;
        constructor(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
        static create1(type: ITypeSyntax): ArrayTypeSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ArrayTypeSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ArrayTypeSyntax;
        public withType(type: ITypeSyntax): ArrayTypeSyntax;
        public withOpenBracketToken(openBracketToken: ISyntaxToken): ArrayTypeSyntax;
        public withCloseBracketToken(closeBracketToken: ISyntaxToken): ArrayTypeSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class GenericTypeSyntax extends SyntaxNode implements ITypeSyntax {
        public name: INameSyntax;
        public typeArgumentList: TypeArgumentListSyntax;
        constructor(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
        static create1(name: INameSyntax): GenericTypeSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): GenericTypeSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): GenericTypeSyntax;
        public withName(name: INameSyntax): GenericTypeSyntax;
        public withTypeArgumentList(typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeQuerySyntax extends SyntaxNode implements ITypeSyntax {
        public typeOfKeyword: ISyntaxToken;
        public name: INameSyntax;
        constructor(typeOfKeyword: ISyntaxToken, name: INameSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isType(): boolean;
        public update(typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax;
        static create1(name: INameSyntax): TypeQuerySyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeQuerySyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeQuerySyntax;
        public withTypeOfKeyword(typeOfKeyword: ISyntaxToken): TypeQuerySyntax;
        public withName(name: INameSyntax): TypeQuerySyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeAnnotationSyntax extends SyntaxNode {
        public colonToken: ISyntaxToken;
        public type: ITypeSyntax;
        constructor(colonToken: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax;
        static create1(type: ITypeSyntax): TypeAnnotationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeAnnotationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeAnnotationSyntax;
        public withColonToken(colonToken: ISyntaxToken): TypeAnnotationSyntax;
        public withType(type: ITypeSyntax): TypeAnnotationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class BlockSyntax extends SyntaxNode implements IStatementSyntax {
        public openBraceToken: ISyntaxToken;
        public statements: ISyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(openBraceToken: ISyntaxToken, statements: ISyntaxList, closeBraceToken: ISyntaxToken): BlockSyntax;
        static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): BlockSyntax;
        static create1(): BlockSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): BlockSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): BlockSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): BlockSyntax;
        public withStatements(statements: ISyntaxList): BlockSyntax;
        public withStatement(statement: IStatementSyntax): BlockSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): BlockSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ParameterSyntax extends SyntaxNode {
        public dotDotDotToken: ISyntaxToken;
        public modifiers: ISyntaxList;
        public identifier: ISyntaxToken;
        public questionToken: ISyntaxToken;
        public typeAnnotation: TypeAnnotationSyntax;
        public equalsValueClause: EqualsValueClauseSyntax;
        constructor(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(dotDotDotToken: ISyntaxToken, modifiers: ISyntaxList, identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
        static create(identifier: ISyntaxToken): ParameterSyntax;
        static create1(identifier: ISyntaxToken): ParameterSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ParameterSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ParameterSyntax;
        public withDotDotDotToken(dotDotDotToken: ISyntaxToken): ParameterSyntax;
        public withModifiers(modifiers: ISyntaxList): ParameterSyntax;
        public withModifier(modifier: ISyntaxToken): ParameterSyntax;
        public withIdentifier(identifier: ISyntaxToken): ParameterSyntax;
        public withQuestionToken(questionToken: ISyntaxToken): ParameterSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): ParameterSyntax;
        public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class MemberAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
        public expression: IExpressionSyntax;
        public dotToken: ISyntaxToken;
        public name: ISyntaxToken;
        constructor(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(expression: IExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax;
        static create1(expression: IExpressionSyntax, name: ISyntaxToken): MemberAccessExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberAccessExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberAccessExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): MemberAccessExpressionSyntax;
        public withDotToken(dotToken: ISyntaxToken): MemberAccessExpressionSyntax;
        public withName(name: ISyntaxToken): MemberAccessExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class PostfixUnaryExpressionSyntax extends SyntaxNode implements IPostfixExpressionSyntax {
        public operand: IMemberExpressionSyntax;
        public operatorToken: ISyntaxToken;
        private _kind;
        constructor(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public kind(): SyntaxKind;
        public update(kind: SyntaxKind, operand: IMemberExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): PostfixUnaryExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): PostfixUnaryExpressionSyntax;
        public withKind(kind: SyntaxKind): PostfixUnaryExpressionSyntax;
        public withOperand(operand: IMemberExpressionSyntax): PostfixUnaryExpressionSyntax;
        public withOperatorToken(operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ElementAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
        public expression: IExpressionSyntax;
        public openBracketToken: ISyntaxToken;
        public argumentExpression: IExpressionSyntax;
        public closeBracketToken: ISyntaxToken;
        constructor(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(expression: IExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        static create1(expression: IExpressionSyntax, argumentExpression: IExpressionSyntax): ElementAccessExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ElementAccessExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ElementAccessExpressionSyntax;
        public withExpression(expression: IExpressionSyntax): ElementAccessExpressionSyntax;
        public withOpenBracketToken(openBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        public withArgumentExpression(argumentExpression: IExpressionSyntax): ElementAccessExpressionSyntax;
        public withCloseBracketToken(closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class InvocationExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
        public expression: IMemberExpressionSyntax;
        public argumentList: ArgumentListSyntax;
        constructor(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
        static create1(expression: IMemberExpressionSyntax): InvocationExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): InvocationExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): InvocationExpressionSyntax;
        public withExpression(expression: IMemberExpressionSyntax): InvocationExpressionSyntax;
        public withArgumentList(argumentList: ArgumentListSyntax): InvocationExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ArgumentListSyntax extends SyntaxNode {
        public typeArgumentList: TypeArgumentListSyntax;
        public openParenToken: ISyntaxToken;
        public closeParenToken: ISyntaxToken;
        public arguments: ISeparatedSyntaxList;
        constructor(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ArgumentListSyntax;
        static create(openParenToken: ISyntaxToken, closeParenToken: ISyntaxToken): ArgumentListSyntax;
        static create1(): ArgumentListSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ArgumentListSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ArgumentListSyntax;
        public withTypeArgumentList(typeArgumentList: TypeArgumentListSyntax): ArgumentListSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ArgumentListSyntax;
        public withArguments(_arguments: ISeparatedSyntaxList): ArgumentListSyntax;
        public withArgument(_argument: IExpressionSyntax): ArgumentListSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ArgumentListSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class BinaryExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        public left: IExpressionSyntax;
        public operatorToken: ISyntaxToken;
        public right: IExpressionSyntax;
        private _kind;
        constructor(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isExpression(): boolean;
        public kind(): SyntaxKind;
        public update(kind: SyntaxKind, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): BinaryExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): BinaryExpressionSyntax;
        public withKind(kind: SyntaxKind): BinaryExpressionSyntax;
        public withLeft(left: IExpressionSyntax): BinaryExpressionSyntax;
        public withOperatorToken(operatorToken: ISyntaxToken): BinaryExpressionSyntax;
        public withRight(right: IExpressionSyntax): BinaryExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ConditionalExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        public condition: IExpressionSyntax;
        public questionToken: ISyntaxToken;
        public whenTrue: IExpressionSyntax;
        public colonToken: ISyntaxToken;
        public whenFalse: IExpressionSyntax;
        constructor(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isExpression(): boolean;
        public update(condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        static create1(condition: IExpressionSyntax, whenTrue: IExpressionSyntax, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ConditionalExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ConditionalExpressionSyntax;
        public withCondition(condition: IExpressionSyntax): ConditionalExpressionSyntax;
        public withQuestionToken(questionToken: ISyntaxToken): ConditionalExpressionSyntax;
        public withWhenTrue(whenTrue: IExpressionSyntax): ConditionalExpressionSyntax;
        public withColonToken(colonToken: ISyntaxToken): ConditionalExpressionSyntax;
        public withWhenFalse(whenFalse: IExpressionSyntax): ConditionalExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ConstructSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        public newKeyword: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        constructor(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isTypeMember(): boolean;
        public update(newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
        static create1(): ConstructSignatureSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructSignatureSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructSignatureSyntax;
        public withNewKeyword(newKeyword: ISyntaxToken): ConstructSignatureSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): ConstructSignatureSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class MethodSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        public propertyName: ISyntaxToken;
        public questionToken: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        constructor(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isTypeMember(): boolean;
        public update(propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        static create(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        static create1(propertyName: ISyntaxToken): MethodSignatureSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): MethodSignatureSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): MethodSignatureSyntax;
        public withPropertyName(propertyName: ISyntaxToken): MethodSignatureSyntax;
        public withQuestionToken(questionToken: ISyntaxToken): MethodSignatureSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): MethodSignatureSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class IndexSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        public openBracketToken: ISyntaxToken;
        public parameter: ParameterSyntax;
        public closeBracketToken: ISyntaxToken;
        public typeAnnotation: TypeAnnotationSyntax;
        constructor(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isTypeMember(): boolean;
        public update(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
        static create(openBracketToken: ISyntaxToken, parameter: ParameterSyntax, closeBracketToken: ISyntaxToken): IndexSignatureSyntax;
        static create1(parameter: ParameterSyntax): IndexSignatureSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): IndexSignatureSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): IndexSignatureSyntax;
        public withOpenBracketToken(openBracketToken: ISyntaxToken): IndexSignatureSyntax;
        public withParameter(parameter: ParameterSyntax): IndexSignatureSyntax;
        public withCloseBracketToken(closeBracketToken: ISyntaxToken): IndexSignatureSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class PropertySignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        public propertyName: ISyntaxToken;
        public questionToken: ISyntaxToken;
        public typeAnnotation: TypeAnnotationSyntax;
        constructor(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isTypeMember(): boolean;
        public update(propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
        static create(propertyName: ISyntaxToken): PropertySignatureSyntax;
        static create1(propertyName: ISyntaxToken): PropertySignatureSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): PropertySignatureSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): PropertySignatureSyntax;
        public withPropertyName(propertyName: ISyntaxToken): PropertySignatureSyntax;
        public withQuestionToken(questionToken: ISyntaxToken): PropertySignatureSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class CallSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        public typeParameterList: TypeParameterListSyntax;
        public parameterList: ParameterListSyntax;
        public typeAnnotation: TypeAnnotationSyntax;
        constructor(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isTypeMember(): boolean;
        public update(typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
        static create(parameterList: ParameterListSyntax): CallSignatureSyntax;
        static create1(): CallSignatureSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): CallSignatureSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): CallSignatureSyntax;
        public withTypeParameterList(typeParameterList: TypeParameterListSyntax): CallSignatureSyntax;
        public withParameterList(parameterList: ParameterListSyntax): CallSignatureSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ParameterListSyntax extends SyntaxNode {
        public openParenToken: ISyntaxToken;
        public parameters: ISeparatedSyntaxList;
        public closeParenToken: ISyntaxToken;
        constructor(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList, closeParenToken: ISyntaxToken): ParameterListSyntax;
        static create(openParenToken: ISyntaxToken, closeParenToken: ISyntaxToken): ParameterListSyntax;
        static create1(): ParameterListSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ParameterListSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ParameterListSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ParameterListSyntax;
        public withParameters(parameters: ISeparatedSyntaxList): ParameterListSyntax;
        public withParameter(parameter: ParameterSyntax): ParameterListSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ParameterListSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeParameterListSyntax extends SyntaxNode {
        public lessThanToken: ISyntaxToken;
        public typeParameters: ISeparatedSyntaxList;
        public greaterThanToken: ISyntaxToken;
        constructor(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        static create(lessThanToken: ISyntaxToken, greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        static create1(): TypeParameterListSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeParameterListSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeParameterListSyntax;
        public withLessThanToken(lessThanToken: ISyntaxToken): TypeParameterListSyntax;
        public withTypeParameters(typeParameters: ISeparatedSyntaxList): TypeParameterListSyntax;
        public withTypeParameter(typeParameter: TypeParameterSyntax): TypeParameterListSyntax;
        public withGreaterThanToken(greaterThanToken: ISyntaxToken): TypeParameterListSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeParameterSyntax extends SyntaxNode {
        public identifier: ISyntaxToken;
        public constraint: ConstraintSyntax;
        constructor(identifier: ISyntaxToken, constraint: ConstraintSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax;
        static create(identifier: ISyntaxToken): TypeParameterSyntax;
        static create1(identifier: ISyntaxToken): TypeParameterSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeParameterSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeParameterSyntax;
        public withIdentifier(identifier: ISyntaxToken): TypeParameterSyntax;
        public withConstraint(constraint: ConstraintSyntax): TypeParameterSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ConstraintSyntax extends SyntaxNode {
        public extendsKeyword: ISyntaxToken;
        public type: ITypeSyntax;
        constructor(extendsKeyword: ISyntaxToken, type: ITypeSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(extendsKeyword: ISyntaxToken, type: ITypeSyntax): ConstraintSyntax;
        static create1(type: ITypeSyntax): ConstraintSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstraintSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstraintSyntax;
        public withExtendsKeyword(extendsKeyword: ISyntaxToken): ConstraintSyntax;
        public withType(type: ITypeSyntax): ConstraintSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ElseClauseSyntax extends SyntaxNode {
        public elseKeyword: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(elseKeyword: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax;
        static create1(statement: IStatementSyntax): ElseClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ElseClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ElseClauseSyntax;
        public withElseKeyword(elseKeyword: ISyntaxToken): ElseClauseSyntax;
        public withStatement(statement: IStatementSyntax): ElseClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class IfStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public ifKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public condition: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public statement: IStatementSyntax;
        public elseClause: ElseClauseSyntax;
        constructor(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax;
        static create(ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): IfStatementSyntax;
        static create1(condition: IExpressionSyntax, statement: IStatementSyntax): IfStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): IfStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): IfStatementSyntax;
        public withIfKeyword(ifKeyword: ISyntaxToken): IfStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): IfStatementSyntax;
        public withCondition(condition: IExpressionSyntax): IfStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): IfStatementSyntax;
        public withStatement(statement: IStatementSyntax): IfStatementSyntax;
        public withElseClause(elseClause: ElseClauseSyntax): IfStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ExpressionStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public expression: IExpressionSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
        static create1(expression: IExpressionSyntax): ExpressionStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ExpressionStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ExpressionStatementSyntax;
        public withExpression(expression: IExpressionSyntax): ExpressionStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ExpressionStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ConstructorDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
        public modifiers: ISyntaxList;
        public constructorKeyword: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        public block: BlockSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
        static create(constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructorDeclarationSyntax;
        static create1(): ConstructorDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ConstructorDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ConstructorDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): ConstructorDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): ConstructorDeclarationSyntax;
        public withConstructorKeyword(constructorKeyword: ISyntaxToken): ConstructorDeclarationSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): ConstructorDeclarationSyntax;
        public withBlock(block: BlockSyntax): ConstructorDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class MemberFunctionDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
        public modifiers: ISyntaxList;
        public propertyName: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        public block: BlockSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberDeclaration(): boolean;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
        static create(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax): MemberFunctionDeclarationSyntax;
        static create1(propertyName: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberFunctionDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberFunctionDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): MemberFunctionDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public withPropertyName(propertyName: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): MemberFunctionDeclarationSyntax;
        public withBlock(block: BlockSyntax): MemberFunctionDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class GetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        public modifiers: ISyntaxList;
        public getKeyword: ISyntaxToken;
        public propertyName: ISyntaxToken;
        public parameterList: ParameterListSyntax;
        public typeAnnotation: TypeAnnotationSyntax;
        public block: BlockSyntax;
        constructor(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberDeclaration(): boolean;
        public isPropertyAssignment(): boolean;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax, block: BlockSyntax): GetAccessorSyntax;
        static create(getKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): GetAccessorSyntax;
        static create1(propertyName: ISyntaxToken): GetAccessorSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): GetAccessorSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): GetAccessorSyntax;
        public withModifiers(modifiers: ISyntaxList): GetAccessorSyntax;
        public withModifier(modifier: ISyntaxToken): GetAccessorSyntax;
        public withGetKeyword(getKeyword: ISyntaxToken): GetAccessorSyntax;
        public withPropertyName(propertyName: ISyntaxToken): GetAccessorSyntax;
        public withParameterList(parameterList: ParameterListSyntax): GetAccessorSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): GetAccessorSyntax;
        public withBlock(block: BlockSyntax): GetAccessorSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class SetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        public modifiers: ISyntaxList;
        public setKeyword: ISyntaxToken;
        public propertyName: ISyntaxToken;
        public parameterList: ParameterListSyntax;
        public block: BlockSyntax;
        constructor(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberDeclaration(): boolean;
        public isPropertyAssignment(): boolean;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
        static create(setKeyword: ISyntaxToken, propertyName: ISyntaxToken, parameterList: ParameterListSyntax, block: BlockSyntax): SetAccessorSyntax;
        static create1(propertyName: ISyntaxToken): SetAccessorSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SetAccessorSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SetAccessorSyntax;
        public withModifiers(modifiers: ISyntaxList): SetAccessorSyntax;
        public withModifier(modifier: ISyntaxToken): SetAccessorSyntax;
        public withSetKeyword(setKeyword: ISyntaxToken): SetAccessorSyntax;
        public withPropertyName(propertyName: ISyntaxToken): SetAccessorSyntax;
        public withParameterList(parameterList: ParameterListSyntax): SetAccessorSyntax;
        public withBlock(block: BlockSyntax): SetAccessorSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class MemberVariableDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
        public modifiers: ISyntaxList;
        public variableDeclarator: VariableDeclaratorSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberDeclaration(): boolean;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        static create(variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        static create1(variableDeclarator: VariableDeclaratorSyntax): MemberVariableDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): MemberVariableDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): MemberVariableDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): MemberVariableDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): MemberVariableDeclarationSyntax;
        public withVariableDeclarator(variableDeclarator: VariableDeclaratorSyntax): MemberVariableDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class IndexMemberDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
        public modifiers: ISyntaxList;
        public indexSignature: IndexSignatureSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isClassElement(): boolean;
        public update(modifiers: ISyntaxList, indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        static create(indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        static create1(indexSignature: IndexSignatureSyntax): IndexMemberDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): IndexMemberDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): IndexMemberDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): IndexMemberDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): IndexMemberDeclarationSyntax;
        public withIndexSignature(indexSignature: IndexSignatureSyntax): IndexMemberDeclarationSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ThrowStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public throwKeyword: ISyntaxToken;
        public expression: IExpressionSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax;
        static create1(expression: IExpressionSyntax): ThrowStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ThrowStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ThrowStatementSyntax;
        public withThrowKeyword(throwKeyword: ISyntaxToken): ThrowStatementSyntax;
        public withExpression(expression: IExpressionSyntax): ThrowStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ThrowStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ReturnStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public returnKeyword: ISyntaxToken;
        public expression: IExpressionSyntax;
        public semicolonToken: ISyntaxToken;
        constructor(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        static create(returnKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        static create1(): ReturnStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ReturnStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ReturnStatementSyntax;
        public withReturnKeyword(returnKeyword: ISyntaxToken): ReturnStatementSyntax;
        public withExpression(expression: IExpressionSyntax): ReturnStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ReturnStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ObjectCreationExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax {
        public newKeyword: ISyntaxToken;
        public expression: IMemberExpressionSyntax;
        public argumentList: ArgumentListSyntax;
        constructor(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
        static create(newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
        static create1(expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectCreationExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectCreationExpressionSyntax;
        public withNewKeyword(newKeyword: ISyntaxToken): ObjectCreationExpressionSyntax;
        public withExpression(expression: IMemberExpressionSyntax): ObjectCreationExpressionSyntax;
        public withArgumentList(argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class SwitchStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public switchKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public expression: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public openBraceToken: ISyntaxToken;
        public switchClauses: ISyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISyntaxList, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        static create(switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        static create1(expression: IExpressionSyntax): SwitchStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SwitchStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SwitchStatementSyntax;
        public withSwitchKeyword(switchKeyword: ISyntaxToken): SwitchStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): SwitchStatementSyntax;
        public withExpression(expression: IExpressionSyntax): SwitchStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): SwitchStatementSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): SwitchStatementSyntax;
        public withSwitchClauses(switchClauses: ISyntaxList): SwitchStatementSyntax;
        public withSwitchClause(switchClause: ISwitchClauseSyntax): SwitchStatementSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): SwitchStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class CaseSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
        public caseKeyword: ISyntaxToken;
        public expression: IExpressionSyntax;
        public colonToken: ISyntaxToken;
        public statements: ISyntaxList;
        constructor(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isSwitchClause(): boolean;
        public update(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: ISyntaxList): CaseSwitchClauseSyntax;
        static create(caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken): CaseSwitchClauseSyntax;
        static create1(expression: IExpressionSyntax): CaseSwitchClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): CaseSwitchClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): CaseSwitchClauseSyntax;
        public withCaseKeyword(caseKeyword: ISyntaxToken): CaseSwitchClauseSyntax;
        public withExpression(expression: IExpressionSyntax): CaseSwitchClauseSyntax;
        public withColonToken(colonToken: ISyntaxToken): CaseSwitchClauseSyntax;
        public withStatements(statements: ISyntaxList): CaseSwitchClauseSyntax;
        public withStatement(statement: IStatementSyntax): CaseSwitchClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class DefaultSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
        public defaultKeyword: ISyntaxToken;
        public colonToken: ISyntaxToken;
        public statements: ISyntaxList;
        constructor(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isSwitchClause(): boolean;
        public update(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: ISyntaxList): DefaultSwitchClauseSyntax;
        static create(defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken): DefaultSwitchClauseSyntax;
        static create1(): DefaultSwitchClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): DefaultSwitchClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): DefaultSwitchClauseSyntax;
        public withDefaultKeyword(defaultKeyword: ISyntaxToken): DefaultSwitchClauseSyntax;
        public withColonToken(colonToken: ISyntaxToken): DefaultSwitchClauseSyntax;
        public withStatements(statements: ISyntaxList): DefaultSwitchClauseSyntax;
        public withStatement(statement: IStatementSyntax): DefaultSwitchClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class BreakStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public breakKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public semicolonToken: ISyntaxToken;
        constructor(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
        static create(breakKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax;
        static create1(): BreakStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): BreakStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): BreakStatementSyntax;
        public withBreakKeyword(breakKeyword: ISyntaxToken): BreakStatementSyntax;
        public withIdentifier(identifier: ISyntaxToken): BreakStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): BreakStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ContinueStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public continueKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public semicolonToken: ISyntaxToken;
        constructor(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        static create(continueKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        static create1(): ContinueStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ContinueStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ContinueStatementSyntax;
        public withContinueKeyword(continueKeyword: ISyntaxToken): ContinueStatementSyntax;
        public withIdentifier(identifier: ISyntaxToken): ContinueStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): ContinueStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ForStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
        public forKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public variableDeclaration: VariableDeclarationSyntax;
        public initializer: IExpressionSyntax;
        public firstSemicolonToken: ISyntaxToken;
        public condition: IExpressionSyntax;
        public secondSemicolonToken: ISyntaxToken;
        public incrementor: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isIterationStatement(): boolean;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
        static create(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, firstSemicolonToken: ISyntaxToken, secondSemicolonToken: ISyntaxToken, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax;
        static create1(statement: IStatementSyntax): ForStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ForStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ForStatementSyntax;
        public withForKeyword(forKeyword: ISyntaxToken): ForStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ForStatementSyntax;
        public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): ForStatementSyntax;
        public withInitializer(initializer: IExpressionSyntax): ForStatementSyntax;
        public withFirstSemicolonToken(firstSemicolonToken: ISyntaxToken): ForStatementSyntax;
        public withCondition(condition: IExpressionSyntax): ForStatementSyntax;
        public withSecondSemicolonToken(secondSemicolonToken: ISyntaxToken): ForStatementSyntax;
        public withIncrementor(incrementor: IExpressionSyntax): ForStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ForStatementSyntax;
        public withStatement(statement: IStatementSyntax): ForStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ForInStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
        public forKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public variableDeclaration: VariableDeclarationSyntax;
        public left: IExpressionSyntax;
        public inKeyword: ISyntaxToken;
        public expression: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isIterationStatement(): boolean;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
        static create(forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax;
        static create1(expression: IExpressionSyntax, statement: IStatementSyntax): ForInStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ForInStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ForInStatementSyntax;
        public withForKeyword(forKeyword: ISyntaxToken): ForInStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): ForInStatementSyntax;
        public withVariableDeclaration(variableDeclaration: VariableDeclarationSyntax): ForInStatementSyntax;
        public withLeft(left: IExpressionSyntax): ForInStatementSyntax;
        public withInKeyword(inKeyword: ISyntaxToken): ForInStatementSyntax;
        public withExpression(expression: IExpressionSyntax): ForInStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): ForInStatementSyntax;
        public withStatement(statement: IStatementSyntax): ForInStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class WhileStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
        public whileKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public condition: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isIterationStatement(): boolean;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax;
        static create1(condition: IExpressionSyntax, statement: IStatementSyntax): WhileStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): WhileStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): WhileStatementSyntax;
        public withWhileKeyword(whileKeyword: ISyntaxToken): WhileStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): WhileStatementSyntax;
        public withCondition(condition: IExpressionSyntax): WhileStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): WhileStatementSyntax;
        public withStatement(statement: IStatementSyntax): WhileStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class WithStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public withKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public condition: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax;
        static create1(condition: IExpressionSyntax, statement: IStatementSyntax): WithStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): WithStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): WithStatementSyntax;
        public withWithKeyword(withKeyword: ISyntaxToken): WithStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): WithStatementSyntax;
        public withCondition(condition: IExpressionSyntax): WithStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): WithStatementSyntax;
        public withStatement(statement: IStatementSyntax): WithStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class EnumDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        public modifiers: ISyntaxList;
        public enumKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public openBraceToken: ISyntaxToken;
        public enumElements: ISeparatedSyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isModuleElement(): boolean;
        public update(modifiers: ISyntaxList, enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        static create(enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        static create1(identifier: ISyntaxToken): EnumDeclarationSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): EnumDeclarationSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): EnumDeclarationSyntax;
        public withModifiers(modifiers: ISyntaxList): EnumDeclarationSyntax;
        public withModifier(modifier: ISyntaxToken): EnumDeclarationSyntax;
        public withEnumKeyword(enumKeyword: ISyntaxToken): EnumDeclarationSyntax;
        public withIdentifier(identifier: ISyntaxToken): EnumDeclarationSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        public withEnumElements(enumElements: ISeparatedSyntaxList): EnumDeclarationSyntax;
        public withEnumElement(enumElement: EnumElementSyntax): EnumDeclarationSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): EnumDeclarationSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class EnumElementSyntax extends SyntaxNode {
        public propertyName: ISyntaxToken;
        public equalsValueClause: EqualsValueClauseSyntax;
        constructor(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
        static create(propertyName: ISyntaxToken): EnumElementSyntax;
        static create1(propertyName: ISyntaxToken): EnumElementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): EnumElementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): EnumElementSyntax;
        public withPropertyName(propertyName: ISyntaxToken): EnumElementSyntax;
        public withEqualsValueClause(equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class CastExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        public lessThanToken: ISyntaxToken;
        public type: ITypeSyntax;
        public greaterThanToken: ISyntaxToken;
        public expression: IUnaryExpressionSyntax;
        constructor(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        static create1(type: ITypeSyntax, expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): CastExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): CastExpressionSyntax;
        public withLessThanToken(lessThanToken: ISyntaxToken): CastExpressionSyntax;
        public withType(type: ITypeSyntax): CastExpressionSyntax;
        public withGreaterThanToken(greaterThanToken: ISyntaxToken): CastExpressionSyntax;
        public withExpression(expression: IUnaryExpressionSyntax): CastExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class ObjectLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        public openBraceToken: ISyntaxToken;
        public propertyAssignments: ISeparatedSyntaxList;
        public closeBraceToken: ISyntaxToken;
        constructor(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        static create(openBraceToken: ISyntaxToken, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        static create1(): ObjectLiteralExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): ObjectLiteralExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): ObjectLiteralExpressionSyntax;
        public withOpenBraceToken(openBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        public withPropertyAssignments(propertyAssignments: ISeparatedSyntaxList): ObjectLiteralExpressionSyntax;
        public withPropertyAssignment(propertyAssignment: IPropertyAssignmentSyntax): ObjectLiteralExpressionSyntax;
        public withCloseBraceToken(closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class SimplePropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
        public propertyName: ISyntaxToken;
        public colonToken: ISyntaxToken;
        public expression: IExpressionSyntax;
        constructor(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPropertyAssignment(): boolean;
        public update(propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        static create1(propertyName: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): SimplePropertyAssignmentSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): SimplePropertyAssignmentSyntax;
        public withPropertyName(propertyName: ISyntaxToken): SimplePropertyAssignmentSyntax;
        public withColonToken(colonToken: ISyntaxToken): SimplePropertyAssignmentSyntax;
        public withExpression(expression: IExpressionSyntax): SimplePropertyAssignmentSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class FunctionPropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
        public propertyName: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        public block: BlockSyntax;
        constructor(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPropertyAssignment(): boolean;
        public update(propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax;
        static create1(propertyName: ISyntaxToken): FunctionPropertyAssignmentSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionPropertyAssignmentSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionPropertyAssignmentSyntax;
        public withPropertyName(propertyName: ISyntaxToken): FunctionPropertyAssignmentSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): FunctionPropertyAssignmentSyntax;
        public withBlock(block: BlockSyntax): FunctionPropertyAssignmentSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class FunctionExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        public functionKeyword: ISyntaxToken;
        public identifier: ISyntaxToken;
        public callSignature: CallSignatureSyntax;
        public block: BlockSyntax;
        constructor(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
        static create(functionKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax;
        static create1(): FunctionExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): FunctionExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): FunctionExpressionSyntax;
        public withFunctionKeyword(functionKeyword: ISyntaxToken): FunctionExpressionSyntax;
        public withIdentifier(identifier: ISyntaxToken): FunctionExpressionSyntax;
        public withCallSignature(callSignature: CallSignatureSyntax): FunctionExpressionSyntax;
        public withBlock(block: BlockSyntax): FunctionExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class EmptyStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public semicolonToken: ISyntaxToken;
        constructor(semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
        static create1(): EmptyStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): EmptyStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): EmptyStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): EmptyStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TryStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public tryKeyword: ISyntaxToken;
        public block: BlockSyntax;
        public catchClause: CatchClauseSyntax;
        public finallyClause: FinallyClauseSyntax;
        constructor(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax;
        static create(tryKeyword: ISyntaxToken, block: BlockSyntax): TryStatementSyntax;
        static create1(): TryStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TryStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TryStatementSyntax;
        public withTryKeyword(tryKeyword: ISyntaxToken): TryStatementSyntax;
        public withBlock(block: BlockSyntax): TryStatementSyntax;
        public withCatchClause(catchClause: CatchClauseSyntax): TryStatementSyntax;
        public withFinallyClause(finallyClause: FinallyClauseSyntax): TryStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class CatchClauseSyntax extends SyntaxNode {
        public catchKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public identifier: ISyntaxToken;
        public typeAnnotation: TypeAnnotationSyntax;
        public closeParenToken: ISyntaxToken;
        public block: BlockSyntax;
        constructor(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
        static create(catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax;
        static create1(identifier: ISyntaxToken): CatchClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): CatchClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): CatchClauseSyntax;
        public withCatchKeyword(catchKeyword: ISyntaxToken): CatchClauseSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): CatchClauseSyntax;
        public withIdentifier(identifier: ISyntaxToken): CatchClauseSyntax;
        public withTypeAnnotation(typeAnnotation: TypeAnnotationSyntax): CatchClauseSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): CatchClauseSyntax;
        public withBlock(block: BlockSyntax): CatchClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class FinallyClauseSyntax extends SyntaxNode {
        public finallyKeyword: ISyntaxToken;
        public block: BlockSyntax;
        constructor(finallyKeyword: ISyntaxToken, block: BlockSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public update(finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax;
        static create1(): FinallyClauseSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): FinallyClauseSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): FinallyClauseSyntax;
        public withFinallyKeyword(finallyKeyword: ISyntaxToken): FinallyClauseSyntax;
        public withBlock(block: BlockSyntax): FinallyClauseSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class LabeledStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public identifier: ISyntaxToken;
        public colonToken: ISyntaxToken;
        public statement: IStatementSyntax;
        constructor(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
        static create1(identifier: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): LabeledStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): LabeledStatementSyntax;
        public withIdentifier(identifier: ISyntaxToken): LabeledStatementSyntax;
        public withColonToken(colonToken: ISyntaxToken): LabeledStatementSyntax;
        public withStatement(statement: IStatementSyntax): LabeledStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class DoStatementSyntax extends SyntaxNode implements IIterationStatementSyntax {
        public doKeyword: ISyntaxToken;
        public statement: IStatementSyntax;
        public whileKeyword: ISyntaxToken;
        public openParenToken: ISyntaxToken;
        public condition: IExpressionSyntax;
        public closeParenToken: ISyntaxToken;
        public semicolonToken: ISyntaxToken;
        constructor(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isIterationStatement(): boolean;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax;
        static create1(statement: IStatementSyntax, condition: IExpressionSyntax): DoStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): DoStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): DoStatementSyntax;
        public withDoKeyword(doKeyword: ISyntaxToken): DoStatementSyntax;
        public withStatement(statement: IStatementSyntax): DoStatementSyntax;
        public withWhileKeyword(whileKeyword: ISyntaxToken): DoStatementSyntax;
        public withOpenParenToken(openParenToken: ISyntaxToken): DoStatementSyntax;
        public withCondition(condition: IExpressionSyntax): DoStatementSyntax;
        public withCloseParenToken(closeParenToken: ISyntaxToken): DoStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): DoStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class TypeOfExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        public typeOfKeyword: ISyntaxToken;
        public expression: IUnaryExpressionSyntax;
        constructor(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        static create1(expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): TypeOfExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): TypeOfExpressionSyntax;
        public withTypeOfKeyword(typeOfKeyword: ISyntaxToken): TypeOfExpressionSyntax;
        public withExpression(expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class DeleteExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        public deleteKeyword: ISyntaxToken;
        public expression: IUnaryExpressionSyntax;
        constructor(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        static create1(expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): DeleteExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): DeleteExpressionSyntax;
        public withDeleteKeyword(deleteKeyword: ISyntaxToken): DeleteExpressionSyntax;
        public withExpression(expression: IUnaryExpressionSyntax): DeleteExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class VoidExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        public voidKeyword: ISyntaxToken;
        public expression: IUnaryExpressionSyntax;
        constructor(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isUnaryExpression(): boolean;
        public isExpression(): boolean;
        public update(voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        static create1(expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): VoidExpressionSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): VoidExpressionSyntax;
        public withVoidKeyword(voidKeyword: ISyntaxToken): VoidExpressionSyntax;
        public withExpression(expression: IUnaryExpressionSyntax): VoidExpressionSyntax;
        public isTypeScriptSpecific(): boolean;
    }
    class DebuggerStatementSyntax extends SyntaxNode implements IStatementSyntax {
        public debuggerKeyword: ISyntaxToken;
        public semicolonToken: ISyntaxToken;
        constructor(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken, parsedInStrictMode: boolean);
        public accept(visitor: ISyntaxVisitor): any;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(slot: number): ISyntaxElement;
        public isStatement(): boolean;
        public isModuleElement(): boolean;
        public update(debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
        static create1(): DebuggerStatementSyntax;
        public withLeadingTrivia(trivia: ISyntaxTriviaList): DebuggerStatementSyntax;
        public withTrailingTrivia(trivia: ISyntaxTriviaList): DebuggerStatementSyntax;
        public withDebuggerKeyword(debuggerKeyword: ISyntaxToken): DebuggerStatementSyntax;
        public withSemicolonToken(semicolonToken: ISyntaxToken): DebuggerStatementSyntax;
        public isTypeScriptSpecific(): boolean;
    }
}
declare module TypeScript {
    class SyntaxRewriter implements ISyntaxVisitor {
        public visitToken(token: ISyntaxToken): ISyntaxToken;
        public visitNode(node: SyntaxNode): SyntaxNode;
        public visitNodeOrToken(node: ISyntaxNodeOrToken): ISyntaxNodeOrToken;
        public visitList(list: ISyntaxList): ISyntaxList;
        public visitSeparatedList(list: ISeparatedSyntaxList): ISeparatedSyntaxList;
        public visitSourceUnit(node: SourceUnitSyntax): any;
        public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
        public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
        public visitImportDeclaration(node: ImportDeclarationSyntax): any;
        public visitExportAssignment(node: ExportAssignmentSyntax): any;
        public visitClassDeclaration(node: ClassDeclarationSyntax): any;
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
        public visitHeritageClause(node: HeritageClauseSyntax): any;
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
        public visitVariableStatement(node: VariableStatementSyntax): any;
        public visitVariableDeclaration(node: VariableDeclarationSyntax): any;
        public visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
        public visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
        public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
        public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
        public visitOmittedExpression(node: OmittedExpressionSyntax): any;
        public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
        public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
        public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
        public visitQualifiedName(node: QualifiedNameSyntax): any;
        public visitTypeArgumentList(node: TypeArgumentListSyntax): any;
        public visitConstructorType(node: ConstructorTypeSyntax): any;
        public visitFunctionType(node: FunctionTypeSyntax): any;
        public visitObjectType(node: ObjectTypeSyntax): any;
        public visitArrayType(node: ArrayTypeSyntax): any;
        public visitGenericType(node: GenericTypeSyntax): any;
        public visitTypeQuery(node: TypeQuerySyntax): any;
        public visitTypeAnnotation(node: TypeAnnotationSyntax): any;
        public visitBlock(node: BlockSyntax): any;
        public visitParameter(node: ParameterSyntax): any;
        public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
        public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
        public visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
        public visitInvocationExpression(node: InvocationExpressionSyntax): any;
        public visitArgumentList(node: ArgumentListSyntax): any;
        public visitBinaryExpression(node: BinaryExpressionSyntax): any;
        public visitConditionalExpression(node: ConditionalExpressionSyntax): any;
        public visitConstructSignature(node: ConstructSignatureSyntax): any;
        public visitMethodSignature(node: MethodSignatureSyntax): any;
        public visitIndexSignature(node: IndexSignatureSyntax): any;
        public visitPropertySignature(node: PropertySignatureSyntax): any;
        public visitCallSignature(node: CallSignatureSyntax): any;
        public visitParameterList(node: ParameterListSyntax): any;
        public visitTypeParameterList(node: TypeParameterListSyntax): any;
        public visitTypeParameter(node: TypeParameterSyntax): any;
        public visitConstraint(node: ConstraintSyntax): any;
        public visitElseClause(node: ElseClauseSyntax): any;
        public visitIfStatement(node: IfStatementSyntax): any;
        public visitExpressionStatement(node: ExpressionStatementSyntax): any;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
        public visitGetAccessor(node: GetAccessorSyntax): any;
        public visitSetAccessor(node: SetAccessorSyntax): any;
        public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
        public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
        public visitThrowStatement(node: ThrowStatementSyntax): any;
        public visitReturnStatement(node: ReturnStatementSyntax): any;
        public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
        public visitSwitchStatement(node: SwitchStatementSyntax): any;
        public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
        public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
        public visitBreakStatement(node: BreakStatementSyntax): any;
        public visitContinueStatement(node: ContinueStatementSyntax): any;
        public visitForStatement(node: ForStatementSyntax): any;
        public visitForInStatement(node: ForInStatementSyntax): any;
        public visitWhileStatement(node: WhileStatementSyntax): any;
        public visitWithStatement(node: WithStatementSyntax): any;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): any;
        public visitEnumElement(node: EnumElementSyntax): any;
        public visitCastExpression(node: CastExpressionSyntax): any;
        public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
        public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
        public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
        public visitFunctionExpression(node: FunctionExpressionSyntax): any;
        public visitEmptyStatement(node: EmptyStatementSyntax): any;
        public visitTryStatement(node: TryStatementSyntax): any;
        public visitCatchClause(node: CatchClauseSyntax): any;
        public visitFinallyClause(node: FinallyClauseSyntax): any;
        public visitLabeledStatement(node: LabeledStatementSyntax): any;
        public visitDoStatement(node: DoStatementSyntax): any;
        public visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
        public visitDeleteExpression(node: DeleteExpressionSyntax): any;
        public visitVoidExpression(node: VoidExpressionSyntax): any;
        public visitDebuggerStatement(node: DebuggerStatementSyntax): any;
    }
}
declare module TypeScript {
    class SyntaxDedenter extends SyntaxRewriter {
        private dedentationAmount;
        private minimumIndent;
        private options;
        private lastTriviaWasNewLine;
        constructor(dedentFirstToken: boolean, dedentationAmount: number, minimumIndent: number, options: FormattingOptions);
        private abort();
        private isAborted();
        public visitToken(token: ISyntaxToken): ISyntaxToken;
        private dedentTriviaList(triviaList);
        private dedentSegment(segment, hasFollowingNewLineTrivia);
        private dedentWhitespace(trivia, hasFollowingNewLineTrivia);
        private dedentMultiLineComment(trivia);
        static dedentNode(node: ISyntaxNode, dedentFirstToken: boolean, dedentAmount: number, minimumIndent: number, options: FormattingOptions): ISyntaxNode;
    }
}
declare module TypeScript {
    class SyntaxIndenter extends SyntaxRewriter {
        private indentationAmount;
        private options;
        private lastTriviaWasNewLine;
        private indentationTrivia;
        constructor(indentFirstToken: boolean, indentationAmount: number, options: FormattingOptions);
        public visitToken(token: ISyntaxToken): ISyntaxToken;
        public indentTriviaList(triviaList: ISyntaxTriviaList): ISyntaxTriviaList;
        private indentSegment(segment);
        private indentWhitespace(trivia, indentThisTrivia, result);
        private indentSingleLineOrSkippedText(trivia, indentThisTrivia, result);
        private indentMultiLineComment(trivia, indentThisTrivia, result);
        static indentNode(node: ISyntaxNode, indentFirstToken: boolean, indentAmount: number, options: FormattingOptions): SyntaxNode;
        static indentNodes(nodes: SyntaxNode[], indentFirstToken: boolean, indentAmount: number, options: FormattingOptions): SyntaxNode[];
    }
}
declare module TypeScript.Syntax {
    class VariableWidthTokenWithNoTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        constructor(fullText: string, kind: SyntaxKind);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class VariableWidthTokenWithLeadingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _leadingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, leadingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class VariableWidthTokenWithTrailingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _trailingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, trailingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class VariableWidthTokenWithLeadingAndTrailingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _leadingTriviaInfo;
        private _trailingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, leadingTriviaInfo: number, trailingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class FixedWidthTokenWithNoTrivia implements ISyntaxToken {
        public tokenKind: SyntaxKind;
        constructor(kind: SyntaxKind);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class FixedWidthTokenWithLeadingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _leadingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, leadingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class FixedWidthTokenWithTrailingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _trailingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, trailingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
    class FixedWidthTokenWithLeadingAndTrailingTrivia implements ISyntaxToken {
        private _fullText;
        public tokenKind: SyntaxKind;
        private _leadingTriviaInfo;
        private _trailingTriviaInfo;
        constructor(fullText: string, kind: SyntaxKind, leadingTriviaInfo: number, trailingTriviaInfo: number);
        public clone(): ISyntaxToken;
        public isNode(): boolean;
        public isToken(): boolean;
        public isList(): boolean;
        public isSeparatedList(): boolean;
        public kind(): SyntaxKind;
        public childCount(): number;
        public childAt(index: number): ISyntaxElement;
        public fullWidth(): number;
        public width(): number;
        public text(): string;
        public fullText(): string;
        public value(): any;
        public valueText(): string;
        public hasLeadingTrivia(): boolean;
        public hasLeadingComment(): boolean;
        public hasLeadingNewLine(): boolean;
        public hasLeadingSkippedText(): boolean;
        public leadingTriviaWidth(): number;
        public leadingTrivia(): ISyntaxTriviaList;
        public hasTrailingTrivia(): boolean;
        public hasTrailingComment(): boolean;
        public hasTrailingNewLine(): boolean;
        public hasTrailingSkippedText(): boolean;
        public trailingTriviaWidth(): number;
        public trailingTrivia(): ISyntaxTriviaList;
        public hasSkippedToken(): boolean;
        public toJSON(key: any): any;
        public firstToken(): ISyntaxToken;
        public lastToken(): ISyntaxToken;
        public isTypeScriptSpecific(): boolean;
        public isIncrementallyUnusable(): boolean;
        public accept(visitor: ISyntaxVisitor): any;
        private realize();
        public collectTextElements(elements: string[]): void;
        private findTokenInternal(parent, position, fullStart);
        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        public isExpression(): boolean;
        public isPrimaryExpression(): boolean;
        public isMemberExpression(): boolean;
        public isPostfixExpression(): boolean;
        public isUnaryExpression(): boolean;
    }
}
declare module TypeScript {
    interface ISyntaxToken extends ISyntaxNodeOrToken, INameSyntax, IPrimaryExpressionSyntax {
        tokenKind: SyntaxKind;
        text(): string;
        value(): any;
        valueText(): string;
        hasLeadingTrivia(): boolean;
        hasLeadingComment(): boolean;
        hasLeadingNewLine(): boolean;
        hasLeadingSkippedText(): boolean;
        hasTrailingTrivia(): boolean;
        hasTrailingComment(): boolean;
        hasTrailingNewLine(): boolean;
        hasTrailingSkippedText(): boolean;
        hasSkippedToken(): boolean;
        leadingTrivia(): ISyntaxTriviaList;
        trailingTrivia(): ISyntaxTriviaList;
        withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken;
        withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken;
        clone(): ISyntaxToken;
    }
    interface ITokenInfo {
        leadingTrivia?: ISyntaxTrivia[];
        text?: string;
        trailingTrivia?: ISyntaxTrivia[];
    }
}
declare module TypeScript.Syntax {
    function isExpression(token: ISyntaxToken): boolean;
    function realizeToken(token: ISyntaxToken): ISyntaxToken;
    function convertToIdentifierName(token: ISyntaxToken): ISyntaxToken;
    function tokenToJSON(token: ISyntaxToken): any;
    function value(token: ISyntaxToken): any;
    function massageEscapes(text: string): string;
    function valueText(token: ISyntaxToken): string;
    function emptyToken(kind: SyntaxKind): ISyntaxToken;
    function token(kind: SyntaxKind, info?: ITokenInfo): ISyntaxToken;
    function identifier(text: string, info?: ITokenInfo): ISyntaxToken;
}
declare module TypeScript {
    class SyntaxTokenReplacer extends SyntaxRewriter {
        private token1;
        private token2;
        constructor(token1: ISyntaxToken, token2: ISyntaxToken);
        public visitToken(token: ISyntaxToken): ISyntaxToken;
        public visitNode(node: SyntaxNode): SyntaxNode;
        public visitList(list: ISyntaxList): ISyntaxList;
        public visitSeparatedList(list: ISeparatedSyntaxList): ISeparatedSyntaxList;
    }
}
declare module TypeScript {
    interface ISyntaxTrivia {
        kind(): SyntaxKind;
        isWhitespace(): boolean;
        isComment(): boolean;
        isNewLine(): boolean;
        isSkippedToken(): boolean;
        fullWidth(): number;
        fullText(): string;
        skippedToken(): ISyntaxToken;
    }
}
declare module TypeScript.Syntax {
    function deferredTrivia(kind: SyntaxKind, text: ISimpleText, fullStart: number, fullWidth: number): ISyntaxTrivia;
    function trivia(kind: SyntaxKind, text: string): ISyntaxTrivia;
    function skippedTokenTrivia(token: ISyntaxToken): ISyntaxTrivia;
    function spaces(count: number): ISyntaxTrivia;
    function whitespace(text: string): ISyntaxTrivia;
    function multiLineComment(text: string): ISyntaxTrivia;
    function singleLineComment(text: string): ISyntaxTrivia;
    var spaceTrivia: ISyntaxTrivia;
    var lineFeedTrivia: ISyntaxTrivia;
    var carriageReturnTrivia: ISyntaxTrivia;
    var carriageReturnLineFeedTrivia: ISyntaxTrivia;
    function splitMultiLineCommentTriviaIntoMultipleLines(trivia: ISyntaxTrivia): string[];
}
declare module TypeScript {
    interface ISyntaxTriviaList {
        count(): number;
        syntaxTriviaAt(index: number): ISyntaxTrivia;
        fullWidth(): number;
        fullText(): string;
        hasComment(): boolean;
        hasNewLine(): boolean;
        hasSkippedToken(): boolean;
        last(): ISyntaxTrivia;
        toArray(): ISyntaxTrivia[];
        concat(trivia: ISyntaxTriviaList): ISyntaxTriviaList;
        collectTextElements(elements: string[]): void;
    }
}
declare module TypeScript.Syntax {
    var emptyTriviaList: ISyntaxTriviaList;
    function triviaList(trivia: ISyntaxTrivia[]): ISyntaxTriviaList;
    var spaceTriviaList: ISyntaxTriviaList;
}
declare module TypeScript {
    class SyntaxUtilities {
        static isAngleBracket(positionedElement: PositionedElement): boolean;
        static getToken(list: ISyntaxList, kind: SyntaxKind): ISyntaxToken;
        static containsToken(list: ISyntaxList, kind: SyntaxKind): boolean;
        static hasExportKeyword(moduleElement: IModuleElementSyntax): boolean;
        static getExportKeyword(moduleElement: IModuleElementSyntax): ISyntaxToken;
        static isAmbientDeclarationSyntax(positionNode: PositionedNode): boolean;
    }
}
declare module TypeScript {
    interface ISyntaxVisitor {
        visitToken(token: ISyntaxToken): any;
        visitSourceUnit(node: SourceUnitSyntax): any;
        visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
        visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
        visitImportDeclaration(node: ImportDeclarationSyntax): any;
        visitExportAssignment(node: ExportAssignmentSyntax): any;
        visitClassDeclaration(node: ClassDeclarationSyntax): any;
        visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
        visitHeritageClause(node: HeritageClauseSyntax): any;
        visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
        visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
        visitVariableStatement(node: VariableStatementSyntax): any;
        visitVariableDeclaration(node: VariableDeclarationSyntax): any;
        visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
        visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
        visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
        visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
        visitOmittedExpression(node: OmittedExpressionSyntax): any;
        visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
        visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
        visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
        visitQualifiedName(node: QualifiedNameSyntax): any;
        visitTypeArgumentList(node: TypeArgumentListSyntax): any;
        visitConstructorType(node: ConstructorTypeSyntax): any;
        visitFunctionType(node: FunctionTypeSyntax): any;
        visitObjectType(node: ObjectTypeSyntax): any;
        visitArrayType(node: ArrayTypeSyntax): any;
        visitGenericType(node: GenericTypeSyntax): any;
        visitTypeQuery(node: TypeQuerySyntax): any;
        visitTypeAnnotation(node: TypeAnnotationSyntax): any;
        visitBlock(node: BlockSyntax): any;
        visitParameter(node: ParameterSyntax): any;
        visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
        visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
        visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
        visitInvocationExpression(node: InvocationExpressionSyntax): any;
        visitArgumentList(node: ArgumentListSyntax): any;
        visitBinaryExpression(node: BinaryExpressionSyntax): any;
        visitConditionalExpression(node: ConditionalExpressionSyntax): any;
        visitConstructSignature(node: ConstructSignatureSyntax): any;
        visitMethodSignature(node: MethodSignatureSyntax): any;
        visitIndexSignature(node: IndexSignatureSyntax): any;
        visitPropertySignature(node: PropertySignatureSyntax): any;
        visitCallSignature(node: CallSignatureSyntax): any;
        visitParameterList(node: ParameterListSyntax): any;
        visitTypeParameterList(node: TypeParameterListSyntax): any;
        visitTypeParameter(node: TypeParameterSyntax): any;
        visitConstraint(node: ConstraintSyntax): any;
        visitElseClause(node: ElseClauseSyntax): any;
        visitIfStatement(node: IfStatementSyntax): any;
        visitExpressionStatement(node: ExpressionStatementSyntax): any;
        visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
        visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
        visitGetAccessor(node: GetAccessorSyntax): any;
        visitSetAccessor(node: SetAccessorSyntax): any;
        visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
        visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
        visitThrowStatement(node: ThrowStatementSyntax): any;
        visitReturnStatement(node: ReturnStatementSyntax): any;
        visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
        visitSwitchStatement(node: SwitchStatementSyntax): any;
        visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
        visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
        visitBreakStatement(node: BreakStatementSyntax): any;
        visitContinueStatement(node: ContinueStatementSyntax): any;
        visitForStatement(node: ForStatementSyntax): any;
        visitForInStatement(node: ForInStatementSyntax): any;
        visitWhileStatement(node: WhileStatementSyntax): any;
        visitWithStatement(node: WithStatementSyntax): any;
        visitEnumDeclaration(node: EnumDeclarationSyntax): any;
        visitEnumElement(node: EnumElementSyntax): any;
        visitCastExpression(node: CastExpressionSyntax): any;
        visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
        visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
        visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
        visitFunctionExpression(node: FunctionExpressionSyntax): any;
        visitEmptyStatement(node: EmptyStatementSyntax): any;
        visitTryStatement(node: TryStatementSyntax): any;
        visitCatchClause(node: CatchClauseSyntax): any;
        visitFinallyClause(node: FinallyClauseSyntax): any;
        visitLabeledStatement(node: LabeledStatementSyntax): any;
        visitDoStatement(node: DoStatementSyntax): any;
        visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
        visitDeleteExpression(node: DeleteExpressionSyntax): any;
        visitVoidExpression(node: VoidExpressionSyntax): any;
        visitDebuggerStatement(node: DebuggerStatementSyntax): any;
    }
    class SyntaxVisitor implements ISyntaxVisitor {
        public defaultVisit(node: ISyntaxNodeOrToken): any;
        public visitToken(token: ISyntaxToken): any;
        public visitSourceUnit(node: SourceUnitSyntax): any;
        public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
        public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
        public visitImportDeclaration(node: ImportDeclarationSyntax): any;
        public visitExportAssignment(node: ExportAssignmentSyntax): any;
        public visitClassDeclaration(node: ClassDeclarationSyntax): any;
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
        public visitHeritageClause(node: HeritageClauseSyntax): any;
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
        public visitVariableStatement(node: VariableStatementSyntax): any;
        public visitVariableDeclaration(node: VariableDeclarationSyntax): any;
        public visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
        public visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
        public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
        public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
        public visitOmittedExpression(node: OmittedExpressionSyntax): any;
        public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
        public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
        public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
        public visitQualifiedName(node: QualifiedNameSyntax): any;
        public visitTypeArgumentList(node: TypeArgumentListSyntax): any;
        public visitConstructorType(node: ConstructorTypeSyntax): any;
        public visitFunctionType(node: FunctionTypeSyntax): any;
        public visitObjectType(node: ObjectTypeSyntax): any;
        public visitArrayType(node: ArrayTypeSyntax): any;
        public visitGenericType(node: GenericTypeSyntax): any;
        public visitTypeQuery(node: TypeQuerySyntax): any;
        public visitTypeAnnotation(node: TypeAnnotationSyntax): any;
        public visitBlock(node: BlockSyntax): any;
        public visitParameter(node: ParameterSyntax): any;
        public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
        public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
        public visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
        public visitInvocationExpression(node: InvocationExpressionSyntax): any;
        public visitArgumentList(node: ArgumentListSyntax): any;
        public visitBinaryExpression(node: BinaryExpressionSyntax): any;
        public visitConditionalExpression(node: ConditionalExpressionSyntax): any;
        public visitConstructSignature(node: ConstructSignatureSyntax): any;
        public visitMethodSignature(node: MethodSignatureSyntax): any;
        public visitIndexSignature(node: IndexSignatureSyntax): any;
        public visitPropertySignature(node: PropertySignatureSyntax): any;
        public visitCallSignature(node: CallSignatureSyntax): any;
        public visitParameterList(node: ParameterListSyntax): any;
        public visitTypeParameterList(node: TypeParameterListSyntax): any;
        public visitTypeParameter(node: TypeParameterSyntax): any;
        public visitConstraint(node: ConstraintSyntax): any;
        public visitElseClause(node: ElseClauseSyntax): any;
        public visitIfStatement(node: IfStatementSyntax): any;
        public visitExpressionStatement(node: ExpressionStatementSyntax): any;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
        public visitGetAccessor(node: GetAccessorSyntax): any;
        public visitSetAccessor(node: SetAccessorSyntax): any;
        public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
        public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
        public visitThrowStatement(node: ThrowStatementSyntax): any;
        public visitReturnStatement(node: ReturnStatementSyntax): any;
        public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
        public visitSwitchStatement(node: SwitchStatementSyntax): any;
        public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
        public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
        public visitBreakStatement(node: BreakStatementSyntax): any;
        public visitContinueStatement(node: ContinueStatementSyntax): any;
        public visitForStatement(node: ForStatementSyntax): any;
        public visitForInStatement(node: ForInStatementSyntax): any;
        public visitWhileStatement(node: WhileStatementSyntax): any;
        public visitWithStatement(node: WithStatementSyntax): any;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): any;
        public visitEnumElement(node: EnumElementSyntax): any;
        public visitCastExpression(node: CastExpressionSyntax): any;
        public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
        public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
        public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
        public visitFunctionExpression(node: FunctionExpressionSyntax): any;
        public visitEmptyStatement(node: EmptyStatementSyntax): any;
        public visitTryStatement(node: TryStatementSyntax): any;
        public visitCatchClause(node: CatchClauseSyntax): any;
        public visitFinallyClause(node: FinallyClauseSyntax): any;
        public visitLabeledStatement(node: LabeledStatementSyntax): any;
        public visitDoStatement(node: DoStatementSyntax): any;
        public visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
        public visitDeleteExpression(node: DeleteExpressionSyntax): any;
        public visitVoidExpression(node: VoidExpressionSyntax): any;
        public visitDebuggerStatement(node: DebuggerStatementSyntax): any;
    }
}
declare module TypeScript {
    class SyntaxWalker implements ISyntaxVisitor {
        public visitToken(token: ISyntaxToken): void;
        public visitNode(node: SyntaxNode): void;
        public visitNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
        private visitOptionalToken(token);
        public visitOptionalNode(node: SyntaxNode): void;
        public visitOptionalNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
        public visitList(list: ISyntaxList): void;
        public visitSeparatedList(list: ISeparatedSyntaxList): void;
        public visitSourceUnit(node: SourceUnitSyntax): void;
        public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): void;
        public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): void;
        public visitImportDeclaration(node: ImportDeclarationSyntax): void;
        public visitExportAssignment(node: ExportAssignmentSyntax): void;
        public visitClassDeclaration(node: ClassDeclarationSyntax): void;
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): void;
        public visitHeritageClause(node: HeritageClauseSyntax): void;
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): void;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): void;
        public visitVariableStatement(node: VariableStatementSyntax): void;
        public visitVariableDeclaration(node: VariableDeclarationSyntax): void;
        public visitVariableDeclarator(node: VariableDeclaratorSyntax): void;
        public visitEqualsValueClause(node: EqualsValueClauseSyntax): void;
        public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): void;
        public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): void;
        public visitOmittedExpression(node: OmittedExpressionSyntax): void;
        public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): void;
        public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): void;
        public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): void;
        public visitQualifiedName(node: QualifiedNameSyntax): void;
        public visitTypeArgumentList(node: TypeArgumentListSyntax): void;
        public visitConstructorType(node: ConstructorTypeSyntax): void;
        public visitFunctionType(node: FunctionTypeSyntax): void;
        public visitObjectType(node: ObjectTypeSyntax): void;
        public visitArrayType(node: ArrayTypeSyntax): void;
        public visitGenericType(node: GenericTypeSyntax): void;
        public visitTypeQuery(node: TypeQuerySyntax): void;
        public visitTypeAnnotation(node: TypeAnnotationSyntax): void;
        public visitBlock(node: BlockSyntax): void;
        public visitParameter(node: ParameterSyntax): void;
        public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): void;
        public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): void;
        public visitElementAccessExpression(node: ElementAccessExpressionSyntax): void;
        public visitInvocationExpression(node: InvocationExpressionSyntax): void;
        public visitArgumentList(node: ArgumentListSyntax): void;
        public visitBinaryExpression(node: BinaryExpressionSyntax): void;
        public visitConditionalExpression(node: ConditionalExpressionSyntax): void;
        public visitConstructSignature(node: ConstructSignatureSyntax): void;
        public visitMethodSignature(node: MethodSignatureSyntax): void;
        public visitIndexSignature(node: IndexSignatureSyntax): void;
        public visitPropertySignature(node: PropertySignatureSyntax): void;
        public visitCallSignature(node: CallSignatureSyntax): void;
        public visitParameterList(node: ParameterListSyntax): void;
        public visitTypeParameterList(node: TypeParameterListSyntax): void;
        public visitTypeParameter(node: TypeParameterSyntax): void;
        public visitConstraint(node: ConstraintSyntax): void;
        public visitElseClause(node: ElseClauseSyntax): void;
        public visitIfStatement(node: IfStatementSyntax): void;
        public visitExpressionStatement(node: ExpressionStatementSyntax): void;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): void;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): void;
        public visitGetAccessor(node: GetAccessorSyntax): void;
        public visitSetAccessor(node: SetAccessorSyntax): void;
        public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): void;
        public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): void;
        public visitThrowStatement(node: ThrowStatementSyntax): void;
        public visitReturnStatement(node: ReturnStatementSyntax): void;
        public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): void;
        public visitSwitchStatement(node: SwitchStatementSyntax): void;
        public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): void;
        public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): void;
        public visitBreakStatement(node: BreakStatementSyntax): void;
        public visitContinueStatement(node: ContinueStatementSyntax): void;
        public visitForStatement(node: ForStatementSyntax): void;
        public visitForInStatement(node: ForInStatementSyntax): void;
        public visitWhileStatement(node: WhileStatementSyntax): void;
        public visitWithStatement(node: WithStatementSyntax): void;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): void;
        public visitEnumElement(node: EnumElementSyntax): void;
        public visitCastExpression(node: CastExpressionSyntax): void;
        public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): void;
        public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): void;
        public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): void;
        public visitFunctionExpression(node: FunctionExpressionSyntax): void;
        public visitEmptyStatement(node: EmptyStatementSyntax): void;
        public visitTryStatement(node: TryStatementSyntax): void;
        public visitCatchClause(node: CatchClauseSyntax): void;
        public visitFinallyClause(node: FinallyClauseSyntax): void;
        public visitLabeledStatement(node: LabeledStatementSyntax): void;
        public visitDoStatement(node: DoStatementSyntax): void;
        public visitTypeOfExpression(node: TypeOfExpressionSyntax): void;
        public visitDeleteExpression(node: DeleteExpressionSyntax): void;
        public visitVoidExpression(node: VoidExpressionSyntax): void;
        public visitDebuggerStatement(node: DebuggerStatementSyntax): void;
    }
}
declare module TypeScript {
    class PositionTrackingWalker extends SyntaxWalker {
        private _position;
        public visitToken(token: ISyntaxToken): void;
        public position(): number;
        public skip(element: ISyntaxElement): void;
    }
}
declare module TypeScript {
    interface ITokenInformation {
        previousToken: ISyntaxToken;
        nextToken: ISyntaxToken;
    }
    class SyntaxInformationMap extends SyntaxWalker {
        private trackParents;
        private trackPreviousToken;
        private tokenToInformation;
        private elementToPosition;
        private _previousToken;
        private _previousTokenInformation;
        private _currentPosition;
        private _elementToParent;
        private _parentStack;
        constructor(trackParents: boolean, trackPreviousToken: boolean);
        static create(node: SyntaxNode, trackParents: boolean, trackPreviousToken: boolean): SyntaxInformationMap;
        public visitNode(node: SyntaxNode): void;
        public visitToken(token: ISyntaxToken): void;
        public parent(element: ISyntaxElement): SyntaxNode;
        public fullStart(element: ISyntaxElement): number;
        public start(element: ISyntaxElement): number;
        public end(element: ISyntaxElement): number;
        public previousToken(token: ISyntaxToken): ISyntaxToken;
        public tokenInformation(token: ISyntaxToken): ITokenInformation;
        public firstTokenInLineContainingToken(token: ISyntaxToken): ISyntaxToken;
        public isFirstTokenInLine(token: ISyntaxToken): boolean;
        private isFirstTokenInLineWorker(information);
    }
}
declare module TypeScript {
    class SyntaxNodeInvariantsChecker extends SyntaxWalker {
        private tokenTable;
        static checkInvariants(node: SyntaxNode): void;
        public visitToken(token: ISyntaxToken): void;
    }
}
declare module TypeScript {
    class DepthLimitedWalker extends PositionTrackingWalker {
        private _depth;
        private _maximumDepth;
        constructor(maximumDepth: number);
        public visitNode(node: SyntaxNode): void;
    }
}
declare module TypeScript.Parser {
    function parse(fileName: string, text: ISimpleText, isDeclaration: boolean, options: ParseOptions): SyntaxTree;
    function incrementalParse(oldSyntaxTree: SyntaxTree, textChangeRange: TextChangeRange, newText: ISimpleText): SyntaxTree;
}
declare module TypeScript {
    class SyntaxTree {
        private _sourceUnit;
        private _isDeclaration;
        private _parserDiagnostics;
        private _allDiagnostics;
        private _fileName;
        private _lineMap;
        private _parseOptions;
        constructor(sourceUnit: SourceUnitSyntax, isDeclaration: boolean, diagnostics: Diagnostic[], fileName: string, lineMap: LineMap, parseOtions: ParseOptions);
        public toJSON(key: any): any;
        public sourceUnit(): SourceUnitSyntax;
        public isDeclaration(): boolean;
        private computeDiagnostics();
        public diagnostics(): Diagnostic[];
        public fileName(): string;
        public lineMap(): LineMap;
        public parseOptions(): ParseOptions;
        public structuralEquals(tree: SyntaxTree): boolean;
    }
}
declare module TypeScript {
    class Unicode {
        static unicodeES3IdentifierStart: number[];
        static unicodeES3IdentifierPart: number[];
        static unicodeES5IdentifierStart: number[];
        static unicodeES5IdentifierPart: number[];
        static lookupInUnicodeMap(code: number, map: number[]): boolean;
        static isIdentifierStart(code: number, languageVersion: LanguageVersion): boolean;
        static isIdentifierPart(code: number, languageVersion: LanguageVersion): boolean;
    }
}
declare module TypeScript {
    module CompilerDiagnostics {
        var debug: boolean;
        interface IDiagnosticWriter {
            Alert(output: string): void;
        }
        var diagnosticWriter: IDiagnosticWriter;
        var analysisPass: number;
        function Alert(output: string): void;
        function debugPrint(s: string): void;
        function assert(condition: boolean, s: string): void;
    }
    interface ILogger {
        information(): boolean;
        debug(): boolean;
        warning(): boolean;
        error(): boolean;
        fatal(): boolean;
        log(s: string): void;
    }
    class NullLogger implements ILogger {
        public information(): boolean;
        public debug(): boolean;
        public warning(): boolean;
        public error(): boolean;
        public fatal(): boolean;
        public log(s: string): void;
    }
    function timeFunction(logger: ILogger, funcDescription: string, func: () => any): any;
}
declare module TypeScript {
    class Document {
        private _compiler;
        private _semanticInfoChain;
        public fileName: string;
        public referencedFiles: string[];
        private _scriptSnapshot;
        public byteOrderMark: ByteOrderMark;
        public version: number;
        public isOpen: boolean;
        private _syntaxTree;
        private _topLevelDecl;
        private _diagnostics;
        private _bloomFilter;
        private _sourceUnit;
        private _lineMap;
        private _declASTMap;
        private _astDeclMap;
        private _amdDependencies;
        private _externalModuleIndicatorSpan;
        constructor(_compiler: TypeScriptCompiler, _semanticInfoChain: SemanticInfoChain, fileName: string, referencedFiles: string[], _scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, _syntaxTree: SyntaxTree, _topLevelDecl: PullDecl);
        public invalidate(): void;
        public isDeclareFile(): boolean;
        private cacheSyntaxTreeInfo(syntaxTree);
        private getAmdDependency(comment);
        private getImplicitImportSpan(sourceUnitLeadingTrivia);
        private getImplicitImportSpanWorker(trivia, position);
        private getTopLevelImportOrExportSpan(node);
        public sourceUnit(): SourceUnit;
        public diagnostics(): Diagnostic[];
        public lineMap(): LineMap;
        public isExternalModule(): boolean;
        public externalModuleIndicatorSpan(): TextSpan;
        public amdDependencies(): string[];
        public syntaxTree(): SyntaxTree;
        public bloomFilter(): BloomFilter;
        public emitToOwnOutputFile(): boolean;
        public update(scriptSnapshot: IScriptSnapshot, version: number, isOpen: boolean, textChangeRange: TextChangeRange): Document;
        static create(compiler: TypeScriptCompiler, semanticInfoChain: SemanticInfoChain, fileName: string, scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, referencedFiles: string[]): Document;
        public topLevelDecl(): PullDecl;
        public _getDeclForAST(ast: AST): PullDecl;
        public getEnclosingDecl(ast: AST): PullDecl;
        public _setDeclForAST(ast: AST, decl: PullDecl): void;
        public _getASTForDecl(decl: PullDecl): AST;
        public _setASTForDecl(decl: PullDecl, ast: AST): void;
    }
}
declare module TypeScript {
    function hasFlag(val: number, flag: number): boolean;
    enum TypeRelationshipFlags {
        SuccessfulComparison = 0,
        RequiredPropertyIsMissing = 2,
        IncompatibleSignatures = 4,
        SourceSignatureHasTooManyParameters = 3,
        IncompatibleReturnTypes = 16,
        IncompatiblePropertyTypes = 32,
        IncompatibleParameterTypes = 64,
        InconsistantPropertyAccesibility = 128,
    }
    enum ModuleGenTarget {
        Unspecified = 0,
        Synchronous = 1,
        Asynchronous = 2,
    }
}
declare module TypeScript {
    function createIntrinsicsObject<T>(): IIndexable<T>;
    interface IHashTable<T> {
        getAllKeys(): string[];
        add(key: string, data: T): boolean;
        addOrUpdate(key: string, data: T): boolean;
        map(fn: (k: string, value: T, context: any) => void, context: any): void;
        every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
        some(fn: (k: string, value: T, context: any) => void, context: any): boolean;
        count(): number;
        lookup(key: string): T;
    }
    class StringHashTable<T> implements IHashTable<T> {
        private itemCount;
        private table;
        public getAllKeys(): string[];
        public add(key: string, data: T): boolean;
        public addOrUpdate(key: string, data: T): boolean;
        public map(fn: (k: string, value: T, context: any) => void, context: any): void;
        public every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
        public some(fn: (k: string, value: T, context: any) => void, context: any): boolean;
        public count(): number;
        public lookup(key: string): T;
        public remove(key: string): void;
    }
    class IdentiferNameHashTable<T> extends StringHashTable<T> {
        public getAllKeys(): string[];
        public add(key: string, data: T): boolean;
        public addOrUpdate(key: string, data: T): boolean;
        public map(fn: (k: string, value: T, context: any) => void, context: any): void;
        public every(fn: (k: string, value: T, context: any) => void, context: any): boolean;
        public some(fn: (k: string, value: any, context: any) => void, context: any): boolean;
        public lookup(key: string): T;
    }
}
declare module TypeScript {
    interface IParameters {
        length: number;
        lastParameterIsRest(): boolean;
        ast: AST;
        astAt(index: number): AST;
        identifierAt(index: number): Identifier;
        typeAt(index: number): AST;
        initializerAt(index: number): EqualsValueClause;
        isOptionalAt(index: number): boolean;
    }
}
declare module TypeScript.ASTHelpers {
    function scriptIsElided(sourceUnit: SourceUnit): boolean;
    function moduleIsElided(declaration: ModuleDeclaration): boolean;
    function enumIsElided(declaration: EnumDeclaration): boolean;
    function isValidAstNode(ast: IASTSpan): boolean;
    function getAstAtPosition(script: AST, pos: number, useTrailingTriviaAsLimChar?: boolean, forceInclusive?: boolean): AST;
    function getExtendsHeritageClause(clauses: ISyntaxList2): HeritageClause;
    function getImplementsHeritageClause(clauses: ISyntaxList2): HeritageClause;
    function isCallExpression(ast: AST): boolean;
    function isCallExpressionTarget(ast: AST): boolean;
    function isDeclarationASTOrDeclarationNameAST(ast: AST): boolean;
    function getEnclosingParameterForInitializer(ast: AST): Parameter;
    function getEnclosingMemberVariableDeclaration(ast: AST): MemberVariableDeclaration;
    function isNameOfFunction(ast: AST): boolean;
    function isNameOfMemberFunction(ast: AST): boolean;
    function isNameOfMemberAccessExpression(ast: AST): boolean;
    function isRightSideOfQualifiedName(ast: AST): boolean;
    function parentIsModuleDeclaration(ast: AST): boolean;
    function parametersFromIdentifier(id: Identifier): IParameters;
    function parametersFromParameter(parameter: Parameter): IParameters;
    function parametersFromParameterList(list: ParameterList): IParameters;
    function isDeclarationAST(ast: AST): boolean;
    function docComments(ast: AST): Comment[];
    function getParameterList(ast: AST): ParameterList;
    function getType(ast: AST): AST;
    function getVariableDeclaratorModifiers(variableDeclarator: VariableDeclarator): PullElementFlags[];
    function isIntegerLiteralAST(expression: AST): boolean;
    function getEnclosingModuleDeclaration(ast: AST): ModuleDeclaration;
    function getModuleDeclarationFromNameAST(ast: AST): ModuleDeclaration;
    function isLastNameOfModule(ast: ModuleDeclaration, astName: AST): boolean;
    function getNameOfIdenfierOrQualifiedName(name: AST): string;
    function getModuleNames(name: AST, result?: Identifier[]): Identifier[];
}
declare module TypeScript {
    class AstWalkOptions {
        public goChildren: boolean;
        public stopWalking: boolean;
    }
    interface IAstWalker {
        options: AstWalkOptions;
        state: any;
    }
    class AstWalkerFactory {
        public walk(ast: AST, pre: (ast: AST, walker: IAstWalker) => void, post?: (ast: AST, walker: IAstWalker) => void, state?: any): void;
        public simpleWalk(ast: AST, pre: (ast: AST, state: any) => void, post?: (ast: AST, state: any) => void, state?: any): void;
    }
    function getAstWalkerFactory(): AstWalkerFactory;
}
declare module TypeScript {
    class Base64VLQFormat {
        static encode(inValue: number): string;
        static decode(inString: string): {
            value: number;
            rest: string;
        };
    }
}
declare module TypeScript {
    class SourceMapPosition {
        public sourceLine: number;
        public sourceColumn: number;
        public emittedLine: number;
        public emittedColumn: number;
    }
    class SourceMapping {
        public start: SourceMapPosition;
        public end: SourceMapPosition;
        public nameIndex: number;
        public childMappings: SourceMapping[];
    }
    class SourceMapEntry {
        public emittedFile: string;
        public emittedLine: number;
        public emittedColumn: number;
        public sourceFile: string;
        public sourceLine: number;
        public sourceColumn: number;
        public sourceName: string;
        constructor(emittedFile: string, emittedLine: number, emittedColumn: number, sourceFile: string, sourceLine: number, sourceColumn: number, sourceName: string);
    }
    class SourceMapper {
        private jsFile;
        private sourceMapOut;
        static MapFileExtension: string;
        private jsFileName;
        private sourceMapPath;
        private sourceMapDirectory;
        private sourceRoot;
        public names: string[];
        private mappingLevel;
        private tsFilePaths;
        private allSourceMappings;
        public currentMappings: SourceMapping[][];
        public currentNameIndex: number[];
        private sourceMapEntries;
        constructor(jsFile: TextWriter, sourceMapOut: TextWriter, document: Document, jsFilePath: string, emitOptions: EmitOptions, resolvePath: (path: string) => string);
        public getOutputFile(): OutputFile;
        public increaseMappingLevel(ast: IASTSpan): void;
        public decreaseMappingLevel(ast: IASTSpan): void;
        public setNewSourceFile(document: Document, emitOptions: EmitOptions): void;
        private setSourceMapOptions(document, jsFilePath, emitOptions, resolvePath);
        private setNewSourceFilePath(document, emitOptions);
        public emitSourceMapping(): void;
    }
}
declare module TypeScript {
    enum EmitContainer {
        Prog = 0,
        Module = 1,
        DynamicModule = 2,
        Class = 3,
        Constructor = 4,
        Function = 5,
        Args = 6,
        Interface = 7,
    }
    class EmitState {
        public column: number;
        public line: number;
        public container: EmitContainer;
        constructor();
    }
    class EmitOptions {
        public resolvePath: (path: string) => string;
        private _diagnostic;
        private _settings;
        private _commonDirectoryPath;
        private _sharedOutputFile;
        private _sourceRootDirectory;
        private _sourceMapRootDirectory;
        private _outputDirectory;
        public diagnostic(): Diagnostic;
        public commonDirectoryPath(): string;
        public sharedOutputFile(): string;
        public sourceRootDirectory(): string;
        public sourceMapRootDirectory(): string;
        public outputDirectory(): string;
        public compilationSettings(): ImmutableCompilationSettings;
        constructor(compiler: TypeScriptCompiler, resolvePath: (path: string) => string);
        private determineCommonDirectoryPath(compiler);
    }
    class Indenter {
        static indentStep: number;
        static indentStepString: string;
        static indentStrings: string[];
        public indentAmt: number;
        public increaseIndent(): void;
        public decreaseIndent(): void;
        public getIndent(): string;
    }
    function lastParameterIsRest(parameterList: ParameterList): boolean;
    class Emitter {
        public emittingFileName: string;
        public outfile: TextWriter;
        public emitOptions: EmitOptions;
        private semanticInfoChain;
        public globalThisCapturePrologueEmitted: boolean;
        public extendsPrologueEmitted: boolean;
        public thisClassNode: ClassDeclaration;
        public inArrowFunction: boolean;
        public moduleName: string;
        public emitState: EmitState;
        public indenter: Indenter;
        public sourceMapper: SourceMapper;
        public captureThisStmtString: string;
        private currentVariableDeclaration;
        private declStack;
        private exportAssignment;
        private inWithBlock;
        public document: Document;
        private detachedCommentsElement;
        constructor(emittingFileName: string, outfile: TextWriter, emitOptions: EmitOptions, semanticInfoChain: SemanticInfoChain);
        private pushDecl(decl);
        private popDecl(decl);
        private getEnclosingDecl();
        public setExportAssignment(exportAssignment: ExportAssignment): void;
        public getExportAssignment(): ExportAssignment;
        public setDocument(document: Document): void;
        public shouldEmitImportDeclaration(importDeclAST: ImportDeclaration): boolean;
        public emitImportDeclaration(importDeclAST: ImportDeclaration): void;
        public createSourceMapper(document: Document, jsFileName: string, jsFile: TextWriter, sourceMapOut: TextWriter, resolvePath: (path: string) => string): void;
        public setSourceMapperNewSourceFile(document: Document): void;
        private updateLineAndColumn(s);
        public writeToOutputWithSourceMapRecord(s: string, astSpan: IASTSpan): void;
        public writeToOutput(s: string): void;
        public writeLineToOutput(s: string, force?: boolean): void;
        public writeCaptureThisStatement(ast: AST): void;
        public setContainer(c: number): number;
        private getIndentString();
        public emitIndent(): void;
        public emitComment(comment: Comment, trailing: boolean, first: boolean): void;
        public emitComments(ast: AST, pre: boolean, onlyPinnedOrTripleSlashComments?: boolean): void;
        private isPinnedOrTripleSlash(comment);
        public emitCommentsArray(comments: Comment[], trailing: boolean): void;
        public emitObjectLiteralExpression(objectLiteral: ObjectLiteralExpression): void;
        public emitArrayLiteralExpression(arrayLiteral: ArrayLiteralExpression): void;
        public emitObjectCreationExpression(objectCreationExpression: ObjectCreationExpression): void;
        public getConstantDecl(dotExpr: MemberAccessExpression): PullEnumElementDecl;
        public tryEmitConstant(dotExpr: MemberAccessExpression): boolean;
        public emitInvocationExpression(callNode: InvocationExpression): void;
        private emitParameterList(list);
        private emitFunctionParameters(parameters);
        private emitFunctionBodyStatements(name, funcDecl, parameterList, block, bodyExpression);
        private emitDefaultValueAssignments(parameters);
        private emitRestParameterInitializer(parameters);
        private getImportDecls(fileName);
        public getModuleImportAndDependencyList(sourceUnit: SourceUnit): {
            importList: string;
            dependencyList: string;
        };
        public shouldCaptureThis(ast: AST): boolean;
        public emitEnum(moduleDecl: EnumDeclaration): void;
        private getModuleDeclToVerifyChildNameCollision(moduleDecl, changeNameIfAnyDeclarationInContext);
        private hasChildNameCollision(moduleName, parentDecl);
        private getModuleName(moduleDecl, changeNameIfAnyDeclarationInContext?);
        private emitModuleDeclarationWorker(moduleDecl);
        public emitSingleModuleDeclaration(moduleDecl: ModuleDeclaration, moduleName: IASTToken): void;
        public emitEnumElement(varDecl: EnumElement): void;
        public emitElementAccessExpression(expression: ElementAccessExpression): void;
        public emitSimpleArrowFunctionExpression(arrowFunction: SimpleArrowFunctionExpression): void;
        public emitParenthesizedArrowFunctionExpression(arrowFunction: ParenthesizedArrowFunctionExpression): void;
        private emitAnyArrowFunctionExpression(arrowFunction, funcName, parameters, block, expression);
        public emitConstructor(funcDecl: ConstructorDeclaration): void;
        public emitGetAccessor(accessor: GetAccessor): void;
        public emitSetAccessor(accessor: SetAccessor): void;
        public emitFunctionExpression(funcDecl: FunctionExpression): void;
        public emitFunction(funcDecl: FunctionDeclaration): void;
        public emitAmbientVarDecl(varDecl: VariableDeclarator): void;
        public emitVarDeclVar(): void;
        public emitVariableDeclaration(declaration: VariableDeclaration): void;
        private emitMemberVariableDeclaration(varDecl);
        public emitVariableDeclarator(varDecl: VariableDeclarator): void;
        private symbolIsUsedInItsEnclosingContainer(symbol, dynamic?);
        private shouldQualifySymbolNameWithParentName(symbol);
        private getSymbolForEmit(ast);
        public emitName(name: Identifier, addThis: boolean): void;
        public recordSourceMappingNameStart(name: string): void;
        public recordSourceMappingNameEnd(): void;
        public recordSourceMappingStart(ast: IASTSpan): void;
        public recordSourceMappingEnd(ast: IASTSpan): void;
        public getOutputFiles(): OutputFile[];
        private emitParameterPropertyAndMemberVariableAssignments();
        private isOnSameLine(pos1, pos2);
        private emitCommaSeparatedList(parent, list, buffer, preserveNewLines);
        public emitList(list: ISyntaxList2, useNewLineSeparator?: boolean, startInclusive?: number, endExclusive?: number): void;
        public emitSeparatedList(list: ISeparatedSyntaxList2, useNewLineSeparator?: boolean, startInclusive?: number, endExclusive?: number): void;
        private isDirectivePrologueElement(node);
        public emitSpaceBetweenConstructs(node1: AST, node2: AST): void;
        private getDetachedComments(element);
        private emitPossibleCopyrightHeaders(script);
        private emitDetachedComments(list);
        public emitScriptElements(sourceUnit: SourceUnit): void;
        public emitConstructorStatements(funcDecl: ConstructorDeclaration): void;
        public emitJavascript(ast: AST, startLine: boolean): void;
        public emitAccessorMemberDeclaration(funcDecl: AST, name: IASTToken, className: string, isProto: boolean): void;
        private emitAccessorBody(funcDecl, parameterList, block);
        public emitClass(classDecl: ClassDeclaration): void;
        private emitClassMembers(classDecl);
        private emitClassMemberFunctionDeclaration(classDecl, funcDecl);
        private requiresExtendsBlock(moduleElements);
        public emitPrologue(sourceUnit: SourceUnit): void;
        public emitThis(): void;
        public emitBlockOrStatement(node: AST): void;
        public emitLiteralExpression(expression: LiteralExpression): void;
        public emitThisExpression(expression: ThisExpression): void;
        public emitSuperExpression(expression: SuperExpression): void;
        public emitParenthesizedExpression(parenthesizedExpression: ParenthesizedExpression): void;
        public emitCastExpression(expression: CastExpression): void;
        public emitPrefixUnaryExpression(expression: PrefixUnaryExpression): void;
        public emitPostfixUnaryExpression(expression: PostfixUnaryExpression): void;
        public emitTypeOfExpression(expression: TypeOfExpression): void;
        public emitDeleteExpression(expression: DeleteExpression): void;
        public emitVoidExpression(expression: VoidExpression): void;
        private canEmitDottedNameMemberAccessExpression(expression);
        private emitDottedNameMemberAccessExpression(expression);
        private emitDottedNameMemberAccessExpressionRecurse(expression);
        public emitMemberAccessExpression(expression: MemberAccessExpression): void;
        public emitQualifiedName(name: QualifiedName): void;
        public emitBinaryExpression(expression: BinaryExpression): void;
        public emitSimplePropertyAssignment(property: SimplePropertyAssignment): void;
        public emitFunctionPropertyAssignment(funcProp: FunctionPropertyAssignment): void;
        public emitConditionalExpression(expression: ConditionalExpression): void;
        public emitThrowStatement(statement: ThrowStatement): void;
        public emitExpressionStatement(statement: ExpressionStatement): void;
        public emitLabeledStatement(statement: LabeledStatement): void;
        public emitBlock(block: Block): void;
        public emitBreakStatement(jump: BreakStatement): void;
        public emitContinueStatement(jump: ContinueStatement): void;
        public emitWhileStatement(statement: WhileStatement): void;
        public emitDoStatement(statement: DoStatement): void;
        public emitIfStatement(statement: IfStatement): void;
        public emitElseClause(elseClause: ElseClause): void;
        public emitReturnStatement(statement: ReturnStatement): void;
        public emitForInStatement(statement: ForInStatement): void;
        public emitForStatement(statement: ForStatement): void;
        public emitWithStatement(statement: WithStatement): void;
        public emitSwitchStatement(statement: SwitchStatement): void;
        public emitCaseSwitchClause(clause: CaseSwitchClause): void;
        private emitSwitchClauseBody(body);
        public emitDefaultSwitchClause(clause: DefaultSwitchClause): void;
        public emitTryStatement(statement: TryStatement): void;
        public emitCatchClause(clause: CatchClause): void;
        public emitFinallyClause(clause: FinallyClause): void;
        public emitDebuggerStatement(statement: DebuggerStatement): void;
        public emitNumericLiteral(literal: NumericLiteral): void;
        public emitRegularExpressionLiteral(literal: RegularExpressionLiteral): void;
        public emitStringLiteral(literal: StringLiteral): void;
        public emitEqualsValueClause(clause: EqualsValueClause): void;
        public emitParameter(parameter: Parameter): void;
        public emitConstructorDeclaration(declaration: ConstructorDeclaration): void;
        public shouldEmitFunctionDeclaration(declaration: FunctionDeclaration): boolean;
        public emitFunctionDeclaration(declaration: FunctionDeclaration): void;
        private emitSourceUnit(sourceUnit);
        public shouldEmitEnumDeclaration(declaration: EnumDeclaration): boolean;
        public emitEnumDeclaration(declaration: EnumDeclaration): void;
        public shouldEmitModuleDeclaration(declaration: ModuleDeclaration): boolean;
        private emitModuleDeclaration(declaration);
        public shouldEmitClassDeclaration(declaration: ClassDeclaration): boolean;
        public emitClassDeclaration(declaration: ClassDeclaration): void;
        public shouldEmitInterfaceDeclaration(declaration: InterfaceDeclaration): boolean;
        public emitInterfaceDeclaration(declaration: InterfaceDeclaration): void;
        private firstVariableDeclarator(statement);
        private isNotAmbientOrHasInitializer(variableStatement);
        public shouldEmitVariableStatement(statement: VariableStatement): boolean;
        public emitVariableStatement(statement: VariableStatement): void;
        public emitGenericType(type: GenericType): void;
        private shouldEmit(ast);
        private emit(ast);
        private emitWorker(ast);
    }
    function getLastConstructor(classDecl: ClassDeclaration): ConstructorDeclaration;
    function getTrimmedTextLines(comment: Comment): string[];
}
declare module TypeScript {
    class MemberName {
        public prefix: string;
        public suffix: string;
        public isString(): boolean;
        public isArray(): boolean;
        public isMarker(): boolean;
        public toString(): string;
        static memberNameToString(memberName: MemberName, markerInfo?: number[], markerBaseLength?: number): string;
        static create(text: string): MemberName;
        static create(entry: MemberName, prefix: string, suffix: string): MemberName;
    }
    class MemberNameString extends MemberName {
        public text: string;
        constructor(text: string);
        public isString(): boolean;
    }
    class MemberNameArray extends MemberName {
        public delim: string;
        public entries: MemberName[];
        public isArray(): boolean;
        public add(entry: MemberName): void;
        public addAll(entries: MemberName[]): void;
        constructor();
    }
}
declare module TypeScript {
    function stripStartAndEndQuotes(str: string): string;
    function isSingleQuoted(str: string): boolean;
    function isDoubleQuoted(str: string): boolean;
    function isQuoted(str: string): boolean;
    function quoteStr(str: string): string;
    function switchToForwardSlashes(path: string): string;
    function trimModName(modName: string): string;
    function getDeclareFilePath(fname: string): string;
    function isTSFile(fname: string): boolean;
    function isDTSFile(fname: string): boolean;
    function getPrettyName(modPath: string, quote?: boolean, treatAsFileName?: boolean): any;
    function getPathComponents(path: string): string[];
    function getRelativePathToFixedPath(fixedModFilePath: string, absoluteModPath: string, isAbsoultePathURL?: boolean): string;
    function changePathToDTS(modPath: string): string;
    function isRelative(path: string): boolean;
    function isRooted(path: string): boolean;
    function getRootFilePath(outFname: string): string;
    function filePathComponents(fullPath: string): string[];
    function filePath(fullPath: string): string;
    function convertToDirectoryPath(dirPath: string): string;
    function normalizePath(path: string): string;
}
declare module TypeScript {
    interface IFileReference extends ILineAndCharacter {
        path: string;
        isResident: boolean;
        position: number;
        length: number;
    }
}
declare module TypeScript {
    interface IPreProcessedFileInfo {
        referencedFiles: IFileReference[];
        importedFiles: IFileReference[];
        diagnostics: Diagnostic[];
        isLibFile: boolean;
    }
    var tripleSlashReferenceRegExp: RegExp;
    function preProcessFile(fileName: string, sourceText: IScriptSnapshot, readImportFiles?: boolean): IPreProcessedFileInfo;
    function getParseOptions(settings: ImmutableCompilationSettings): ParseOptions;
    function getReferencedFiles(fileName: string, sourceText: IScriptSnapshot): IFileReference[];
}
declare module TypeScript {
    interface IResolvedFile {
        path: string;
        referencedFiles: string[];
        importedFiles: string[];
    }
    interface IReferenceResolverHost {
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        resolveRelativePath(path: string, directory: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        getParentDirectory(path: string): string;
    }
    class ReferenceResolutionResult {
        public resolvedFiles: IResolvedFile[];
        public diagnostics: Diagnostic[];
        public seenNoDefaultLibTag: boolean;
    }
    class ReferenceResolver {
        private useCaseSensitiveFileResolution;
        private inputFileNames;
        private host;
        private visited;
        constructor(inputFileNames: string[], host: IReferenceResolverHost, useCaseSensitiveFileResolution: boolean);
        static resolve(inputFileNames: string[], host: IReferenceResolverHost, useCaseSensitiveFileResolution: boolean): ReferenceResolutionResult;
        public resolveInputFiles(): ReferenceResolutionResult;
        private resolveIncludedFile(path, referenceLocation, resolutionResult);
        private resolveImportedFile(path, referenceLocation, resolutionResult);
        private resolveFile(normalizedPath, resolutionResult);
        private getNormalizedFilePath(path, parentFilePath);
        private getUniqueFileId(filePath);
        private recordVisitedFile(filePath);
        private isVisited(filePath);
        private isSameFile(filePath1, filePath2);
    }
}
declare module TypeScript {
    class TextWriter {
        private name;
        private writeByteOrderMark;
        private outputFileType;
        private contents;
        public onNewLine: boolean;
        constructor(name: string, writeByteOrderMark: boolean, outputFileType: OutputFileType);
        public Write(s: string): void;
        public WriteLine(s: string): void;
        public Close(): void;
        public getOutputFile(): OutputFile;
    }
    class DeclarationEmitter {
        private emittingFileName;
        public document: Document;
        private compiler;
        private emitOptions;
        private semanticInfoChain;
        private declFile;
        private indenter;
        private emittedReferencePaths;
        constructor(emittingFileName: string, document: Document, compiler: TypeScriptCompiler, emitOptions: EmitOptions, semanticInfoChain: SemanticInfoChain);
        public getOutputFile(): OutputFile;
        public emitDeclarations(sourceUnit: SourceUnit): void;
        private emitDeclarationsForList(list);
        private emitSeparatedList(list);
        private emitDeclarationsForAST(ast);
        private getIndentString(declIndent?);
        private emitIndent();
        private canEmitDeclarations(declAST);
        private getDeclFlagsString(pullDecl, typeString);
        private emitDeclFlags(declarationAST, typeString);
        private emitTypeNamesMember(memberName, emitIndent?);
        private emitTypeSignature(ast, type);
        private emitComment(comment);
        private emitDeclarationComments(ast, endLine?);
        private writeDeclarationComments(declComments, endLine?);
        private emitTypeOfVariableDeclaratorOrParameter(boundDecl);
        private emitPropertySignature(varDecl);
        private emitVariableDeclarator(varDecl, isFirstVarInList, isLastVarInList);
        private emitClassElementModifiers(modifiers);
        private emitDeclarationsForMemberVariableDeclaration(varDecl);
        private emitDeclarationsForVariableStatement(variableStatement);
        private emitDeclarationsForVariableDeclaration(variableDeclaration);
        private emitArgDecl(argDecl, id, isOptional, isPrivate);
        private isOverloadedCallSignature(funcDecl);
        private emitDeclarationsForConstructorDeclaration(funcDecl);
        private emitParameterList(isPrivate, parameterList);
        private emitParameters(isPrivate, parameterList);
        private emitMemberFunctionDeclaration(funcDecl);
        private emitCallSignature(funcDecl);
        private emitConstructSignature(funcDecl);
        private emitMethodSignature(funcDecl);
        private emitDeclarationsForFunctionDeclaration(funcDecl);
        private emitIndexMemberDeclaration(funcDecl);
        private emitIndexSignature(funcDecl);
        private emitBaseList(bases, useExtendsList);
        private emitAccessorDeclarationComments(funcDecl);
        private emitDeclarationsForGetAccessor(funcDecl);
        private emitDeclarationsForSetAccessor(funcDecl);
        private emitMemberAccessorDeclaration(funcDecl, modifiers, name);
        private emitClassMembersFromConstructorDefinition(funcDecl);
        private emitDeclarationsForClassDeclaration(classDecl);
        private emitHeritageClauses(clauses);
        private emitHeritageClause(clause);
        static getEnclosingContainer(ast: AST): AST;
        private emitTypeParameters(typeParams, funcSignature?);
        private emitDeclarationsForInterfaceDeclaration(interfaceDecl);
        private emitDeclarationsForImportDeclaration(importDeclAST);
        private emitDeclarationsForEnumDeclaration(moduleDecl);
        private emitDeclarationsForModuleDeclaration(moduleDecl);
        private emitDeclarationsForExportAssignment(ast);
        private resolveScriptReference(document, reference);
        private emitReferencePaths(sourceUnit);
        private emitDeclarationsForSourceUnit(sourceUnit);
    }
}
declare module TypeScript {
    class BloomFilter {
        private bitArray;
        private hashFunctionCount;
        static falsePositiveProbability: number;
        constructor(expectedCount: number);
        static computeM(expectedCount: number): number;
        static computeK(expectedCount: number): number;
        private computeHash(key, seed);
        public addKeys(keys: IIndexable<any>): void;
        public add(value: string): void;
        public probablyContains(value: string): boolean;
        public isEquivalent(filter: BloomFilter): boolean;
        static isEquivalent(array1: boolean[], array2: boolean[]): boolean;
    }
}
declare module TypeScript {
    class IdentifierWalker extends SyntaxWalker {
        public list: IIndexable<boolean>;
        constructor(list: IIndexable<boolean>);
        public visitToken(token: ISyntaxToken): void;
    }
}
declare module TypeScript {
    class CompilationSettings {
        public propagateEnumConstants: boolean;
        public removeComments: boolean;
        public watch: boolean;
        public noResolve: boolean;
        public allowAutomaticSemicolonInsertion: boolean;
        public noImplicitAny: boolean;
        public noLib: boolean;
        public codeGenTarget: LanguageVersion;
        public moduleGenTarget: ModuleGenTarget;
        public outFileOption: string;
        public outDirOption: string;
        public mapSourceFiles: boolean;
        public mapRoot: string;
        public sourceRoot: string;
        public generateDeclarationFiles: boolean;
        public useCaseSensitiveFileResolution: boolean;
        public gatherDiagnostics: boolean;
        public codepage: number;
        public createFileLog: boolean;
    }
    class ImmutableCompilationSettings {
        private static _defaultSettings;
        private _propagateEnumConstants;
        private _removeComments;
        private _watch;
        private _noResolve;
        private _allowAutomaticSemicolonInsertion;
        private _noImplicitAny;
        private _noLib;
        private _codeGenTarget;
        private _moduleGenTarget;
        private _outFileOption;
        private _outDirOption;
        private _mapSourceFiles;
        private _mapRoot;
        private _sourceRoot;
        private _generateDeclarationFiles;
        private _useCaseSensitiveFileResolution;
        private _gatherDiagnostics;
        private _codepage;
        private _createFileLog;
        public propagateEnumConstants(): boolean;
        public removeComments(): boolean;
        public watch(): boolean;
        public noResolve(): boolean;
        public allowAutomaticSemicolonInsertion(): boolean;
        public noImplicitAny(): boolean;
        public noLib(): boolean;
        public codeGenTarget(): LanguageVersion;
        public moduleGenTarget(): ModuleGenTarget;
        public outFileOption(): string;
        public outDirOption(): string;
        public mapSourceFiles(): boolean;
        public mapRoot(): string;
        public sourceRoot(): string;
        public generateDeclarationFiles(): boolean;
        public useCaseSensitiveFileResolution(): boolean;
        public gatherDiagnostics(): boolean;
        public codepage(): number;
        public createFileLog(): boolean;
        constructor(propagateEnumConstants: boolean, removeComments: boolean, watch: boolean, noResolve: boolean, allowAutomaticSemicolonInsertion: boolean, noImplicitAny: boolean, noLib: boolean, codeGenTarget: LanguageVersion, moduleGenTarget: ModuleGenTarget, outFileOption: string, outDirOption: string, mapSourceFiles: boolean, mapRoot: string, sourceRoot: string, generateDeclarationFiles: boolean, useCaseSensitiveFileResolution: boolean, gatherDiagnostics: boolean, codepage: number, createFileLog: boolean);
        static defaultSettings(): ImmutableCompilationSettings;
        static fromCompilationSettings(settings: CompilationSettings): ImmutableCompilationSettings;
        public toCompilationSettings(): any;
    }
}
declare module TypeScript {
    enum PullElementFlags {
        None = 0,
        Exported = 1,
        Private = 2,
        Public = 4,
        Ambient = 8,
        Static = 16,
        Optional = 128,
        Signature = 2048,
        Enum = 4096,
        ArrowFunction = 8192,
        ClassConstructorVariable = 16384,
        InitializedModule = 32768,
        InitializedDynamicModule = 65536,
        MustCaptureThis = 262144,
        DeclaredInAWithBlock = 2097152,
        HasReturnStatement = 4194304,
        PropertyParameter = 8388608,
        IsAnnotatedWithAny = 16777216,
        HasDefaultArgs = 33554432,
        ConstructorParameter = 67108864,
        ImplicitVariable = 118784,
        SomeInitializedModule = 102400,
    }
    function hasModifier(modifiers: PullElementFlags[], flag: PullElementFlags): boolean;
    enum PullElementKind {
        None = 0,
        Global = 0,
        Script = 1,
        Primitive = 2,
        Container = 4,
        Class = 8,
        Interface = 16,
        DynamicModule = 32,
        Enum = 64,
        TypeAlias = 128,
        ObjectLiteral = 256,
        Variable = 512,
        CatchVariable = 1024,
        Parameter = 2048,
        Property = 4096,
        TypeParameter = 8192,
        Function = 16384,
        ConstructorMethod = 32768,
        Method = 65536,
        FunctionExpression = 131072,
        GetAccessor = 262144,
        SetAccessor = 524288,
        CallSignature = 1048576,
        ConstructSignature = 2097152,
        IndexSignature = 4194304,
        ObjectType = 8388608,
        FunctionType = 16777216,
        ConstructorType = 33554432,
        EnumMember = 67108864,
        WithBlock = 134217728,
        CatchBlock = 268435456,
        All = 536869887,
        SomeFunction = 1032192,
        SomeValue = 68147712,
        SomeType = 58728795,
        AcceptableAlias = 59753052,
        SomeContainer = 164,
        SomeSignature = 7340032,
        SomeTypeReference = 58720272,
        SomeInstantiatableType = 8216,
    }
}
declare module TypeScript {
    class PullDecl {
        public kind: PullElementKind;
        public name: string;
        private declDisplayName;
        public semanticInfoChain: SemanticInfoChain;
        public declID: number;
        public flags: PullElementFlags;
        private declGroups;
        private childDecls;
        private typeParameters;
        private synthesizedValDecl;
        private containerDecl;
        public childDeclTypeCache: IIndexable<PullDecl[]>;
        public childDeclValueCache: IIndexable<PullDecl[]>;
        public childDeclNamespaceCache: IIndexable<PullDecl[]>;
        public childDeclTypeParameterCache: IIndexable<PullDecl[]>;
        constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, semanticInfoChain: SemanticInfoChain);
        public fileName(): string;
        public getParentPath(): PullDecl[];
        public getParentDecl(): PullDecl;
        public isExternalModule(): boolean;
        public getEnclosingDecl(): PullDecl;
        public _getEnclosingDeclFromParentDecl(): PullDecl;
        public getDisplayName(): string;
        public setSymbol(symbol: PullSymbol): void;
        public ensureSymbolIsBound(): void;
        public getSymbol(): PullSymbol;
        public hasSymbol(): boolean;
        public setSignatureSymbol(signatureSymbol: PullSignatureSymbol): void;
        public getSignatureSymbol(): PullSignatureSymbol;
        public hasSignatureSymbol(): boolean;
        public setFlags(flags: PullElementFlags): void;
        public setFlag(flags: PullElementFlags): void;
        public setValueDecl(valDecl: PullDecl): void;
        public getValueDecl(): PullDecl;
        public getContainerDecl(): PullDecl;
        private getChildDeclCache(declKind);
        public addChildDecl(childDecl: PullDecl): void;
        public searchChildDecls(declName: string, searchKind: PullElementKind): PullDecl[];
        public getChildDecls(): PullDecl[];
        public getTypeParameters(): PullDecl[];
        public addVariableDeclToGroup(decl: PullDecl): void;
        public getVariableDeclGroups(): PullDecl[][];
        public hasBeenBound(): boolean;
        public isSynthesized(): boolean;
        public ast(): AST;
        public isRootDecl(): boolean;
    }
    class RootPullDecl extends PullDecl {
        private _isExternalModule;
        private _fileName;
        constructor(name: string, fileName: string, kind: PullElementKind, declFlags: PullElementFlags, semanticInfoChain: SemanticInfoChain, isExternalModule: boolean);
        public fileName(): string;
        public getParentPath(): PullDecl[];
        public getParentDecl(): PullDecl;
        public isExternalModule(): boolean;
        public getEnclosingDecl(): RootPullDecl;
        public isRootDecl(): boolean;
    }
    class NormalPullDecl extends PullDecl {
        private parentDecl;
        public _rootDecl: RootPullDecl;
        private parentPath;
        constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, parentDecl: PullDecl, addToParent?: boolean);
        public fileName(): string;
        public getParentDecl(): PullDecl;
        public getParentPath(): PullDecl[];
        public isExternalModule(): boolean;
        public getEnclosingDecl(): PullDecl;
        public isRootDecl(): boolean;
    }
    class PullEnumElementDecl extends NormalPullDecl {
        public constantValue: number;
        constructor(declName: string, displayName: string, parentDecl: PullDecl);
    }
    class PullFunctionExpressionDecl extends NormalPullDecl {
        private functionExpressionName;
        constructor(expressionName: string, declFlags: PullElementFlags, parentDecl: PullDecl, displayName?: string);
        public getFunctionExpressionName(): string;
    }
    class PullSynthesizedDecl extends NormalPullDecl {
        constructor(declName: string, displayName: string, kind: PullElementKind, declFlags: PullElementFlags, parentDecl: PullDecl, semanticInfoChain: SemanticInfoChain);
        public isSynthesized(): boolean;
        public fileName(): string;
    }
    class PullDeclGroup {
        public name: string;
        private _decls;
        constructor(name: string);
        public addDecl(decl: PullDecl): void;
        public getDecls(): PullDecl[];
    }
}
declare module TypeScript {
    var pullSymbolID: number;
    var sentinelEmptyArray: any[];
    class PullSymbol {
        public pullSymbolID: number;
        public name: string;
        public kind: PullElementKind;
        private _container;
        public type: PullTypeSymbol;
        private _declarations;
        public isResolved: boolean;
        public isOptional: boolean;
        public inResolution: boolean;
        private isSynthesized;
        public isVarArg: boolean;
        private rootSymbol;
        private _enclosingSignature;
        private _docComments;
        public isPrinting: boolean;
        public isAny(): boolean;
        public isType(): boolean;
        public isTypeReference(): boolean;
        public isSignature(): boolean;
        public isArrayNamedTypeReference(): boolean;
        public isPrimitive(): boolean;
        public isAccessor(): boolean;
        public isError(): boolean;
        public isInterface(): boolean;
        public isMethod(): boolean;
        public isProperty(): boolean;
        public isAlias(): boolean;
        public isContainer(): boolean;
        constructor(name: string, declKind: PullElementKind);
        private findAliasedTypeSymbols(scopeSymbol, skipScopeSymbolAliasesLookIn?, lookIntoOnlyExportedAlias?, aliasSymbols?, visitedScopeDeclarations?);
        public getExternalAliasedSymbols(scopeSymbol: PullSymbol): PullTypeAliasSymbol[];
        static _isExternalModuleReferenceAlias(aliasSymbol: PullTypeAliasSymbol): boolean;
        private getExportedInternalAliasSymbol(scopeSymbol);
        public getAliasSymbolName(scopeSymbol: PullSymbol, aliasNameGetter: (symbol: PullTypeAliasSymbol) => string, aliasPartsNameGetter: (symbol: PullTypeAliasSymbol) => string, skipInternalAlias?: boolean): string;
        public _getResolver(): PullTypeResolver;
        public _resolveDeclaredSymbol(): PullSymbol;
        public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
        public getIsSpecialized(): boolean;
        public getRootSymbol(): PullSymbol;
        public setRootSymbol(symbol: PullSymbol): void;
        public setIsSynthesized(value?: boolean): void;
        public getIsSynthesized(): any;
        public setEnclosingSignature(signature: PullSignatureSymbol): void;
        public getEnclosingSignature(): PullSignatureSymbol;
        public addDeclaration(decl: PullDecl): void;
        public getDeclarations(): PullDecl[];
        public hasDeclaration(decl: PullDecl): boolean;
        public setContainer(containerSymbol: PullTypeSymbol): void;
        public getContainer(): PullTypeSymbol;
        public setResolved(): void;
        public startResolving(): void;
        public setUnresolved(): void;
        public anyDeclHasFlag(flag: PullElementFlags): boolean;
        public allDeclsHaveFlag(flag: PullElementFlags): boolean;
        public pathToRoot(): PullSymbol[];
        private static unqualifiedNameReferencesDifferentSymbolInScope(symbol, scopePath, endScopePathIndex);
        private findQualifyingSymbolPathInScopeSymbol(scopeSymbol);
        public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getNamePartForFullName(): string;
        public fullName(scopeSymbol?: PullSymbol): string;
        public getScopedName(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
        public getScopedNameEx(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, getPrettyTypeName?: boolean, getTypeParamMarkerInfo?: boolean, skipInternalAliasName?: boolean): MemberName;
        public getTypeName(scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean): string;
        public getTypeNameEx(scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean): MemberName;
        private getTypeNameForFunctionSignature(prefix, scopeSymbol?, getPrettyTypeName?);
        public getNameAndTypeName(scopeSymbol?: PullSymbol): string;
        public getNameAndTypeNameEx(scopeSymbol?: PullSymbol): MemberName;
        static getTypeParameterString(typars: PullTypeSymbol[], scopeSymbol?: PullSymbol, useContraintInName?: boolean): string;
        static getTypeParameterStringEx(typeParameters: PullTypeSymbol[], scopeSymbol?: PullSymbol, getTypeParamMarkerInfo?: boolean, useContraintInName?: boolean): MemberNameArray;
        static getIsExternallyVisible(symbol: PullSymbol, fromIsExternallyVisibleSymbol: PullSymbol, inIsExternallyVisibleSymbols: PullSymbol[]): boolean;
        public isExternallyVisible(inIsExternallyVisibleSymbols?: PullSymbol[]): boolean;
        private getDocCommentsOfDecl(decl);
        private getDocCommentArray(symbol);
        private static getDefaultConstructorSymbolForDocComments(classSymbol);
        private getDocCommentText(comments);
        private getDocCommentTextValue(comment);
        public docComments(useConstructorAsClass?: boolean): string;
        private getParameterDocCommentText(param, fncDocComments);
        private cleanJSDocComment(content, spacesToRemove?);
        private consumeLeadingSpace(line, startIndex, maxSpacesToRemove?);
        private isSpaceChar(line, index);
        private cleanDocCommentLine(line, jsDocStyleComment, jsDocLineSpaceToRemove?);
    }
    interface InstantiableSymbol {
        getIsSpecialized(): boolean;
        getAllowedToReferenceTypeParameters(): PullTypeParameterSymbol[];
        getTypeParameterArgumentMap(): TypeArgumentMap;
    }
    class PullSignatureSymbol extends PullSymbol implements InstantiableSymbol {
        private _isDefinition;
        private _memberTypeParameterNameCache;
        private _stringConstantOverload;
        public parameters: PullSymbol[];
        public _typeParameters: PullTypeParameterSymbol[];
        public returnType: PullTypeSymbol;
        public functionType: PullTypeSymbol;
        public hasOptionalParam: boolean;
        public nonOptionalParamCount: number;
        public hasVarArgs: boolean;
        private _allowedToReferenceTypeParameters;
        private _instantiationCache;
        public hasBeenChecked: boolean;
        public inWrapCheck: boolean;
        public inWrapInfiniteExpandingReferenceCheck: boolean;
        private _wrapsTypeParameterCache;
        constructor(kind: PullElementKind, _isDefinition?: boolean);
        public isDefinition(): boolean;
        public isGeneric(): boolean;
        public addParameter(parameter: PullSymbol, isOptional?: boolean): void;
        public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
        public addTypeParametersFromReturnType(): void;
        public getTypeParameters(): PullTypeParameterSymbol[];
        public findTypeParameter(name: string): PullTypeParameterSymbol;
        public getTypeParameterArgumentMap(): TypeArgumentMap;
        public getAllowedToReferenceTypeParameters(): PullTypeParameterSymbol[];
        public addSpecialization(specializedVersionOfThisSignature: PullSignatureSymbol, typeArgumentMap: TypeArgumentMap): void;
        public getSpecialization(typeArgumentMap: TypeArgumentMap): PullSignatureSymbol;
        public isStringConstantOverloadSignature(): boolean;
        public getParameterTypeAtIndex(iParam: number): PullTypeSymbol;
        static getSignatureTypeMemberName(candidateSignature: PullSignatureSymbol, signatures: PullSignatureSymbol[], scopeSymbol: PullSymbol): MemberNameArray;
        static getSignaturesTypeNameEx(signatures: PullSignatureSymbol[], prefix: string, shortform: boolean, brackets: boolean, scopeSymbol?: PullSymbol, getPrettyTypeName?: boolean, candidateSignature?: PullSignatureSymbol): MemberName[];
        public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getSignatureTypeNameEx(prefix: string, shortform: boolean, brackets: boolean, scopeSymbol?: PullSymbol, getParamMarkerInfo?: boolean, getTypeParamMarkerInfo?: boolean): MemberNameArray;
        public forAllParameterTypes(length: number, predicate: (parameterType: PullTypeSymbol, iterationIndex: number) => boolean): boolean;
        public forAllCorrespondingParameterTypesInThisAndOtherSignature(otherSignature: PullSignatureSymbol, predicate: (thisSignatureParameterType: PullTypeSymbol, otherSignatureParameterType: PullTypeSymbol, iterationIndex: number) => boolean): boolean;
        public wrapsSomeTypeParameter(typeParameterArgumentMap: TypeArgumentMap): boolean;
        public getWrappingTypeParameterID(typeParameterArgumentMap: TypeArgumentMap): number;
        public getWrappingTypeParameterIDWorker(typeParameterArgumentMap: TypeArgumentMap): number;
        public _wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReference(enclosingType: PullTypeSymbol, knownWrapMap: IBitMatrix): boolean;
        public _wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReferenceWorker(enclosingType: PullTypeSymbol, knownWrapMap: IBitMatrix): boolean;
    }
    class PullTypeSymbol extends PullSymbol implements InstantiableSymbol {
        private _members;
        private _enclosedMemberTypes;
        private _enclosedMemberContainers;
        private _typeParameters;
        private _allowedToReferenceTypeParameters;
        private _specializedVersionsOfThisType;
        private _arrayVersionOfThisType;
        private _implementedTypes;
        private _extendedTypes;
        private _typesThatExplicitlyImplementThisType;
        private _typesThatExtendThisType;
        private _callSignatures;
        private _allCallSignatures;
        private _constructSignatures;
        private _allConstructSignatures;
        private _indexSignatures;
        private _allIndexSignatures;
        private _allIndexSignaturesOfAugmentedType;
        private _memberNameCache;
        private _enclosedTypeNameCache;
        private _enclosedContainerCache;
        private _typeParameterNameCache;
        private _containedNonMemberNameCache;
        private _containedNonMemberTypeNameCache;
        private _containedNonMemberContainerCache;
        private _simpleInstantiationCache;
        private _complexInstantiationCache;
        private _hasGenericSignature;
        private _hasGenericMember;
        private _hasBaseTypeConflict;
        private _knownBaseTypeCount;
        private _associatedContainerTypeSymbol;
        private _constructorMethod;
        private _hasDefaultConstructor;
        private _functionSymbol;
        private _inMemberTypeNameEx;
        public inSymbolPrivacyCheck: boolean;
        public inWrapCheck: boolean;
        public inWrapInfiniteExpandingReferenceCheck: boolean;
        public typeReference: PullTypeReferenceSymbol;
        private _widenedType;
        private _wrapsTypeParameterCache;
        constructor(name: string, kind: PullElementKind);
        private _isArrayNamedTypeReference;
        public isArrayNamedTypeReference(): boolean;
        private computeIsArrayNamedTypeReference();
        public isType(): boolean;
        public isClass(): boolean;
        public isFunction(): boolean;
        public isConstructor(): boolean;
        public isTypeParameter(): boolean;
        public isTypeVariable(): boolean;
        public isError(): boolean;
        public isEnum(): boolean;
        public getTypeParameterArgumentMap(): TypeArgumentMap;
        public isObject(): boolean;
        public isFunctionType(): boolean;
        public getKnownBaseTypeCount(): number;
        public resetKnownBaseTypeCount(): void;
        public incrementKnownBaseCount(): void;
        public setHasBaseTypeConflict(): void;
        public hasBaseTypeConflict(): boolean;
        public hasMembers(): boolean;
        public setHasGenericSignature(): void;
        public getHasGenericSignature(): boolean;
        public setHasGenericMember(): void;
        public getHasGenericMember(): boolean;
        public setAssociatedContainerType(type: PullTypeSymbol): void;
        public getAssociatedContainerType(): PullTypeSymbol;
        public getArrayType(): PullTypeSymbol;
        public getElementType(): PullTypeSymbol;
        public setArrayType(arrayType: PullTypeSymbol): void;
        public getFunctionSymbol(): PullSymbol;
        public setFunctionSymbol(symbol: PullSymbol): void;
        public findContainedNonMember(name: string): PullSymbol;
        public findContainedNonMemberType(typeName: string, kind?: PullElementKind): PullTypeSymbol;
        public findContainedNonMemberContainer(containerName: string, kind?: PullElementKind): PullTypeSymbol;
        public addMember(memberSymbol: PullSymbol): void;
        public addEnclosedMemberType(enclosedType: PullTypeSymbol): void;
        public addEnclosedMemberContainer(enclosedContainer: PullTypeSymbol): void;
        public addEnclosedNonMember(enclosedNonMember: PullSymbol): void;
        public addEnclosedNonMemberType(enclosedNonMemberType: PullTypeSymbol): void;
        public addEnclosedNonMemberContainer(enclosedNonMemberContainer: PullTypeSymbol): void;
        public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
        public getMembers(): PullSymbol[];
        public setHasDefaultConstructor(hasOne?: boolean): void;
        public getHasDefaultConstructor(): boolean;
        public getConstructorMethod(): PullSymbol;
        public setConstructorMethod(constructorMethod: PullSymbol): void;
        public getTypeParameters(): PullTypeParameterSymbol[];
        public getAllowedToReferenceTypeParameters(): PullTypeParameterSymbol[];
        public isGeneric(): boolean;
        private canUseSimpleInstantiationCache(typeArgumentMap);
        private getSimpleInstantiationCacheId(typeArgumentMap);
        public addSpecialization(specializedVersionOfThisType: PullTypeSymbol, typeArgumentMap: TypeArgumentMap): void;
        public getSpecialization(typeArgumentMap: TypeArgumentMap): PullTypeSymbol;
        public getKnownSpecializations(): PullTypeSymbol[];
        public getTypeArguments(): PullTypeSymbol[];
        public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
        private addCallOrConstructSignaturePrerequisiteBase(signature);
        private addCallSignaturePrerequisite(callSignature);
        public appendCallSignature(callSignature: PullSignatureSymbol): void;
        public insertCallSignatureAtIndex(callSignature: PullSignatureSymbol, index: number): void;
        private addConstructSignaturePrerequisite(constructSignature);
        public appendConstructSignature(constructSignature: PullSignatureSymbol): void;
        public insertConstructSignatureAtIndex(constructSignature: PullSignatureSymbol, index: number): void;
        public addIndexSignature(indexSignature: PullSignatureSymbol): void;
        public hasOwnCallSignatures(): boolean;
        public getOwnCallSignatures(): PullSignatureSymbol[];
        public getCallSignatures(): PullSignatureSymbol[];
        public hasOwnConstructSignatures(): boolean;
        public getOwnDeclaredConstructSignatures(): PullSignatureSymbol[];
        public getConstructSignatures(): PullSignatureSymbol[];
        public hasOwnIndexSignatures(): boolean;
        public getOwnIndexSignatures(): PullSignatureSymbol[];
        public getIndexSignatures(): PullSignatureSymbol[];
        public getIndexSignaturesOfAugmentedType(resolver: PullTypeResolver, globalFunctionInterface: PullTypeSymbol, globalObjectInterface: PullTypeSymbol): PullSignatureSymbol[];
        private getBaseClassConstructSignatures(baseType);
        private getDefaultClassConstructSignature();
        public addImplementedType(implementedType: PullTypeSymbol): void;
        public getImplementedTypes(): PullTypeSymbol[];
        public addExtendedType(extendedType: PullTypeSymbol): void;
        public getExtendedTypes(): PullTypeSymbol[];
        public addTypeThatExtendsThisType(type: PullTypeSymbol): void;
        public getTypesThatExtendThisType(): PullTypeSymbol[];
        public addTypeThatExplicitlyImplementsThisType(type: PullTypeSymbol): void;
        public getTypesThatExplicitlyImplementThisType(): PullTypeSymbol[];
        public hasBase(potentialBase: PullTypeSymbol, visited?: PullSymbol[]): boolean;
        public isValidBaseKind(baseType: PullTypeSymbol, isExtendedType: boolean): boolean;
        public findMember(name: string, lookInParent: boolean): PullSymbol;
        public findNestedType(name: string, kind?: PullElementKind): PullTypeSymbol;
        public findNestedContainer(name: string, kind?: PullElementKind): PullTypeSymbol;
        public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
        public findTypeParameter(name: string): PullTypeParameterSymbol;
        public setResolved(): void;
        public getNamePartForFullName(): string;
        public getScopedName(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
        public isNamedTypeSymbol(): boolean;
        public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getScopedNameEx(scopeSymbol?: PullSymbol, skipTypeParametersInName?: boolean, useConstraintInName?: boolean, getPrettyTypeName?: boolean, getTypeParamMarkerInfo?: boolean, skipInternalAliasName?: boolean, shouldAllowArrayType?: boolean): MemberName;
        public hasOnlyOverloadCallSignatures(): boolean;
        public getTypeOfSymbol(): PullSymbol;
        private getMemberTypeNameEx(topLevel, scopeSymbol?, getPrettyTypeName?);
        public getGenerativeTypeClassification(enclosingType: PullTypeSymbol): GenerativeTypeClassification;
        public wrapsSomeTypeParameter(typeParameterArgumentMap: CandidateInferenceInfo[]): boolean;
        public wrapsSomeTypeParameter(typeParameterArgumentMap: TypeArgumentMap, skipTypeArgumentCheck?: boolean): boolean;
        public getWrappingTypeParameterID(typeParameterArgumentMap: TypeArgumentMap, skipTypeArgumentCheck?: boolean): number;
        private getWrappingTypeParameterIDFromSignatures(signatures, typeParameterArgumentMap);
        private getWrappingTypeParameterIDWorker(typeParameterArgumentMap, skipTypeArgumentCheck);
        public wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReference(enclosingType: PullTypeSymbol): boolean;
        public _wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReferenceRecurse(enclosingType: PullTypeSymbol, knownWrapMap: IBitMatrix): boolean;
        private _wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReferenceWorker(enclosingType, knownWrapMap);
        private _wrapsSomeTypeParameterIntoInfinitelyExpandingTypeReferenceStructure(enclosingType, knownWrapMap);
        public widenedType(resolver: PullTypeResolver, ast: AST, context: PullTypeResolutionContext): PullTypeSymbol;
    }
    class PullPrimitiveTypeSymbol extends PullTypeSymbol {
        constructor(name: string);
        public isAny(): boolean;
        public isNull(): boolean;
        public isUndefined(): boolean;
        public isStringConstant(): boolean;
        public setUnresolved(): void;
        public getDisplayName(): string;
    }
    class PullStringConstantTypeSymbol extends PullPrimitiveTypeSymbol {
        constructor(name: string);
        public isStringConstant(): boolean;
    }
    class PullErrorTypeSymbol extends PullPrimitiveTypeSymbol {
        public _anyType: PullTypeSymbol;
        constructor(_anyType: PullTypeSymbol, name: string);
        public isError(): boolean;
        public _getResolver(): PullTypeResolver;
        public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
        public toString(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
    }
    class PullContainerSymbol extends PullTypeSymbol {
        public instanceSymbol: PullSymbol;
        private assignedValue;
        private assignedType;
        private assignedContainer;
        constructor(name: string, kind: PullElementKind);
        public isContainer(): boolean;
        public setInstanceSymbol(symbol: PullSymbol): void;
        public getInstanceSymbol(): PullSymbol;
        public setExportAssignedValueSymbol(symbol: PullSymbol): void;
        public getExportAssignedValueSymbol(): PullSymbol;
        public setExportAssignedTypeSymbol(type: PullTypeSymbol): void;
        public getExportAssignedTypeSymbol(): PullTypeSymbol;
        public setExportAssignedContainerSymbol(container: PullContainerSymbol): void;
        public getExportAssignedContainerSymbol(): PullContainerSymbol;
        public hasExportAssignment(): boolean;
        static usedAsSymbol(containerSymbol: PullSymbol, symbol: PullSymbol): boolean;
        public getInstanceType(): PullTypeSymbol;
    }
    class PullTypeAliasSymbol extends PullTypeSymbol {
        private _assignedValue;
        private _assignedType;
        private _assignedContainer;
        private _isUsedAsValue;
        private _typeUsedExternally;
        private _isUsedInExportAlias;
        private retrievingExportAssignment;
        private linkedAliasSymbols;
        constructor(name: string);
        public isUsedInExportedAlias(): boolean;
        public typeUsedExternally(): boolean;
        public isUsedAsValue(): boolean;
        public setTypeUsedExternally(): void;
        public setIsUsedInExportedAlias(): void;
        public addLinkedAliasSymbol(contingentValueSymbol: PullTypeAliasSymbol): void;
        public setIsUsedAsValue(): void;
        public assignedValue(): PullSymbol;
        public assignedType(): PullTypeSymbol;
        public assignedContainer(): PullContainerSymbol;
        public isAlias(): boolean;
        public isContainer(): boolean;
        public setAssignedValueSymbol(symbol: PullSymbol): void;
        public getExportAssignedValueSymbol(): PullSymbol;
        public setAssignedTypeSymbol(type: PullTypeSymbol): void;
        public getExportAssignedTypeSymbol(): PullTypeSymbol;
        public setAssignedContainerSymbol(container: PullContainerSymbol): void;
        public getExportAssignedContainerSymbol(): PullContainerSymbol;
        public getMembers(): PullSymbol[];
        public getCallSignatures(): PullSignatureSymbol[];
        public getConstructSignatures(): PullSignatureSymbol[];
        public getIndexSignatures(): PullSignatureSymbol[];
        public findMember(name: string): PullSymbol;
        public findNestedType(name: string): PullTypeSymbol;
        public findNestedContainer(name: string): PullTypeSymbol;
        public getAllMembers(searchDeclKind: PullElementKind, memberVisibility: GetAllMembersVisiblity): PullSymbol[];
    }
    class PullTypeParameterSymbol extends PullTypeSymbol {
        private _constraint;
        constructor(name: string);
        public isTypeParameter(): boolean;
        public setConstraint(constraintType: PullTypeSymbol): void;
        public getConstraint(): PullTypeSymbol;
        public getBaseConstraint(semanticInfoChain: SemanticInfoChain): PullTypeSymbol;
        private getConstraintRecursively(visitedTypeParameters);
        public getDefaultConstraint(semanticInfoChain: SemanticInfoChain): PullTypeSymbol;
        public getCallSignatures(): PullSignatureSymbol[];
        public getConstructSignatures(): PullSignatureSymbol[];
        public getIndexSignatures(): PullSignatureSymbol[];
        public isGeneric(): boolean;
        public fullName(scopeSymbol?: PullSymbol): string;
        public getName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean): string;
        public getDisplayName(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, skipInternalAliasName?: boolean): string;
        public isExternallyVisible(inIsExternallyVisibleSymbols?: PullSymbol[]): boolean;
    }
    class PullAccessorSymbol extends PullSymbol {
        private _getterSymbol;
        private _setterSymbol;
        constructor(name: string);
        public isAccessor(): boolean;
        public setSetter(setter: PullSymbol): void;
        public getSetter(): PullSymbol;
        public setGetter(getter: PullSymbol): void;
        public getGetter(): PullSymbol;
    }
    function getIDForTypeSubstitutions(instantiatingType: PullTypeSymbol, typeArgumentMap: TypeArgumentMap): string;
    function getIDForTypeSubstitutions(instantiatingSignature: PullSignatureSymbol, typeArgumentMap: TypeArgumentMap): string;
    enum GetAllMembersVisiblity {
        all = 0,
        internallyVisible = 1,
        externallyVisible = 2,
    }
}
declare module TypeScript {
    class EnclosingTypeWalkerState {
        public _hasSetEnclosingType: boolean;
        public _currentSymbols: PullSymbol[];
        static getDefaultEnclosingTypeWalkerState(): EnclosingTypeWalkerState;
        static getNonGenericEnclosingTypeWalkerState(): EnclosingTypeWalkerState;
        static getGenericEnclosingTypeWalkerState(genericEnclosingType: PullTypeSymbol): EnclosingTypeWalkerState;
    }
    class PullTypeEnclosingTypeWalker {
        private static _defaultEnclosingTypeWalkerState;
        private static _nonGenericEnclosingTypeWalkerState;
        private enclosingTypeWalkerState;
        constructor();
        private setDefaultTypeWalkerState();
        private setNonGenericEnclosingTypeWalkerState();
        private canSymbolOrDeclBeUsedAsEnclosingTypeHelper(name, kind);
        private canDeclBeUsedAsEnclosingType(decl);
        private canSymbolBeUsedAsEnclosingType(symbol);
        public getEnclosingType(): PullTypeSymbol;
        public _canWalkStructure(): boolean;
        public _getCurrentSymbol(): PullSymbol;
        public getGenerativeClassification(): GenerativeTypeClassification;
        private _pushSymbol(symbol);
        private _popSymbol();
        private setSymbolAsEnclosingType(type);
        private _setEnclosingTypeOfParentDecl(decl, setSignature);
        public setEnclosingTypeForSymbol(symbol: PullSymbol): EnclosingTypeWalkerState;
        public startWalkingType(symbol: PullTypeSymbol): EnclosingTypeWalkerState;
        public endWalkingType(stateWhenStartedWalkingTypes: EnclosingTypeWalkerState): void;
        public walkMemberType(memberName: string, resolver: PullTypeResolver): void;
        public postWalkMemberType(): void;
        public walkSignature(kind: PullElementKind, index: number): void;
        public postWalkSignature(): void;
        public walkTypeArgument(index: number): void;
        public postWalkTypeArgument(): void;
        public walkTypeParameterConstraint(index: number): void;
        public postWalkTypeParameterConstraint(): void;
        public walkReturnType(): void;
        public postWalkReturnType(): void;
        public walkParameterType(iParam: number): void;
        public postWalkParameterType(): void;
        public getBothKindOfIndexSignatures(resolver: PullTypeResolver, context: PullTypeResolutionContext, includeAugmentedType: boolean): IndexSignatureInfo;
        public walkIndexSignatureReturnType(indexSigInfo: IndexSignatureInfo, useStringIndexSignature: boolean, onlySignature?: boolean): void;
        public postWalkIndexSignatureReturnType(onlySignature?: boolean): void;
        public resetEnclosingTypeWalkerState(): EnclosingTypeWalkerState;
        public setEnclosingTypeWalkerState(enclosingTypeWalkerState: EnclosingTypeWalkerState): void;
    }
}
declare module TypeScript {
    class CandidateInferenceInfo {
        public typeParameter: PullTypeParameterSymbol;
        public _inferredTypeAfterFixing: PullTypeSymbol;
        public inferenceCandidates: PullTypeSymbol[];
        public addCandidate(candidate: PullTypeSymbol): void;
        public isFixed(): boolean;
        public fixTypeParameter(resolver: PullTypeResolver, context: PullTypeResolutionContext): void;
    }
    class TypeArgumentInferenceContext {
        public resolver: PullTypeResolver;
        public context: PullTypeResolutionContext;
        public signatureBeingInferred: PullSignatureSymbol;
        public inferenceCache: IBitMatrix;
        public candidateCache: CandidateInferenceInfo[];
        constructor(resolver: PullTypeResolver, context: PullTypeResolutionContext, signatureBeingInferred: PullSignatureSymbol);
        public alreadyRelatingTypes(objectType: PullTypeSymbol, parameterType: PullTypeSymbol): boolean;
        public resetRelationshipCache(): void;
        public addInferenceRoot(param: PullTypeParameterSymbol): void;
        public getInferenceInfo(param: PullTypeParameterSymbol): CandidateInferenceInfo;
        public addCandidateForInference(param: PullTypeParameterSymbol, candidate: PullTypeSymbol): void;
        public inferTypeArguments(): PullTypeSymbol[];
        public fixTypeParameter(typeParameter: PullTypeParameterSymbol): void;
        public _finalizeInferredTypeArguments(): PullTypeSymbol[];
        public isInvocationInferenceContext(): boolean;
    }
    class InvocationTypeArgumentInferenceContext extends TypeArgumentInferenceContext {
        public argumentASTs: ISeparatedSyntaxList2;
        constructor(resolver: PullTypeResolver, context: PullTypeResolutionContext, signatureBeingInferred: PullSignatureSymbol, argumentASTs: ISeparatedSyntaxList2);
        public isInvocationInferenceContext(): boolean;
        public inferTypeArguments(): PullTypeSymbol[];
    }
    class ContextualSignatureInstantiationTypeArgumentInferenceContext extends TypeArgumentInferenceContext {
        private contextualSignature;
        private shouldFixContextualSignatureParameterTypes;
        constructor(resolver: PullTypeResolver, context: PullTypeResolutionContext, signatureBeingInferred: PullSignatureSymbol, contextualSignature: PullSignatureSymbol, shouldFixContextualSignatureParameterTypes: boolean);
        public isInvocationInferenceContext(): boolean;
        public inferTypeArguments(): PullTypeSymbol[];
    }
    class PullContextualTypeContext {
        public contextualType: PullTypeSymbol;
        public provisional: boolean;
        public isInferentiallyTyping: boolean;
        public typeArgumentInferenceContext: TypeArgumentInferenceContext;
        public provisionallyTypedSymbols: PullSymbol[];
        public hasProvisionalErrors: boolean;
        private astSymbolMap;
        constructor(contextualType: PullTypeSymbol, provisional: boolean, isInferentiallyTyping: boolean, typeArgumentInferenceContext: TypeArgumentInferenceContext);
        public recordProvisionallyTypedSymbol(symbol: PullSymbol): void;
        public invalidateProvisionallyTypedSymbols(): void;
        public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
        public getSymbolForAST(ast: AST): PullSymbol;
    }
    class PullTypeResolutionContext {
        private resolver;
        public inTypeCheck: boolean;
        public fileName: string;
        private contextStack;
        private typeCheckedNodes;
        private enclosingTypeWalker1;
        private enclosingTypeWalker2;
        constructor(resolver: PullTypeResolver, inTypeCheck?: boolean, fileName?: string);
        public setTypeChecked(ast: AST): void;
        public canTypeCheckAST(ast: AST): boolean;
        private _pushAnyContextualType(type, provisional, isInferentiallyTyping, argContext);
        public pushNewContextualType(type: PullTypeSymbol): void;
        public propagateContextualType(type: PullTypeSymbol): void;
        public pushInferentialType(type: PullTypeSymbol, typeArgumentInferenceContext: TypeArgumentInferenceContext): void;
        public pushProvisionalType(type: PullTypeSymbol): void;
        public popAnyContextualType(): PullContextualTypeContext;
        public hasProvisionalErrors(): boolean;
        public getContextualType(): PullTypeSymbol;
        public fixAllTypeParametersReferencedByType(type: PullTypeSymbol, resolver: PullTypeResolver, argContext?: TypeArgumentInferenceContext): PullTypeSymbol;
        private getCurrentTypeArgumentInferenceContext();
        public isInferentiallyTyping(): boolean;
        public inProvisionalResolution(): boolean;
        private inBaseTypeResolution;
        public isInBaseTypeResolution(): boolean;
        public startBaseTypeResolution(): boolean;
        public doneBaseTypeResolution(wasInBaseTypeResolution: boolean): void;
        public setTypeInContext(symbol: PullSymbol, type: PullTypeSymbol): void;
        public postDiagnostic(diagnostic: Diagnostic): void;
        public typeCheck(): boolean;
        public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
        public getSymbolForAST(ast: AST): PullSymbol;
        public startWalkingTypes(symbol1: PullTypeSymbol, symbol2: PullTypeSymbol): {
            stateWhenStartedWalkingTypes1: EnclosingTypeWalkerState;
            stateWhenStartedWalkingTypes2: EnclosingTypeWalkerState;
        };
        public endWalkingTypes(statesWhenStartedWalkingTypes: {
            stateWhenStartedWalkingTypes1: EnclosingTypeWalkerState;
            stateWhenStartedWalkingTypes2: EnclosingTypeWalkerState;
        }): void;
        public setEnclosingTypeForSymbols(symbol1: PullSymbol, symbol2: PullSymbol): {
            enclosingTypeWalkerState1: EnclosingTypeWalkerState;
            enclosingTypeWalkerState2: EnclosingTypeWalkerState;
        };
        public walkMemberTypes(memberName: string): void;
        public postWalkMemberTypes(): void;
        public walkSignatures(kind: PullElementKind, index: number, index2?: number): void;
        public postWalkSignatures(): void;
        public walkTypeParameterConstraints(index: number): void;
        public postWalkTypeParameterConstraints(): void;
        public walkTypeArgument(index: number): void;
        public postWalkTypeArgument(): void;
        public walkReturnTypes(): void;
        public postWalkReturnTypes(): void;
        public walkParameterTypes(iParam: number): void;
        public postWalkParameterTypes(): void;
        public getBothKindOfIndexSignatures(includeAugmentedType1: boolean, includeAugmentedType2: boolean): {
            indexSigs1: IndexSignatureInfo;
            indexSigs2: IndexSignatureInfo;
        };
        public walkIndexSignatureReturnTypes(indexSigs: {
            indexSigs1: IndexSignatureInfo;
            indexSigs2: IndexSignatureInfo;
        }, useStringIndexSignature1: boolean, useStringIndexSignature2: boolean, onlySignature?: boolean): void;
        public postWalkIndexSignatureReturnTypes(onlySignature?: boolean): void;
        public swapEnclosingTypeWalkers(): void;
        public oneOfClassificationsIsInfinitelyExpanding(): boolean;
        public resetEnclosingTypeWalkerStates(): {
            enclosingTypeWalkerState1: EnclosingTypeWalkerState;
            enclosingTypeWalkerState2: EnclosingTypeWalkerState;
        };
        public setEnclosingTypeWalkerStates(enclosingTypeWalkerStates: {
            enclosingTypeWalkerState1: EnclosingTypeWalkerState;
            enclosingTypeWalkerState2: EnclosingTypeWalkerState;
        }): void;
    }
}
declare module TypeScript {
    interface IPullTypeCollection {
        getLength(): number;
        getTypeAtIndex(index: number): PullTypeSymbol;
    }
    class PullAdditionalCallResolutionData {
        public targetSymbol: PullSymbol;
        public resolvedSignatures: PullSignatureSymbol[];
        public candidateSignature: PullSignatureSymbol;
        public actualParametersContextTypeSymbols: PullTypeSymbol[];
        public diagnosticsFromOverloadResolution: Diagnostic[];
    }
    class PullAdditionalObjectLiteralResolutionData {
        public membersContextTypeSymbols: PullTypeSymbol[];
    }
    interface IndexSignatureInfo {
        numericSignature: PullSignatureSymbol;
        stringSignature: PullSignatureSymbol;
    }
    class PullTypeResolver {
        private compilationSettings;
        public semanticInfoChain: SemanticInfoChain;
        private _cachedArrayInterfaceType;
        private _cachedNumberInterfaceType;
        private _cachedStringInterfaceType;
        private _cachedBooleanInterfaceType;
        private _cachedObjectInterfaceType;
        private _cachedFunctionInterfaceType;
        private _cachedIArgumentsInterfaceType;
        private _cachedRegExpInterfaceType;
        private _cachedAnyTypeArgs;
        private typeCheckCallBacks;
        private postTypeCheckWorkitems;
        private _cachedFunctionArgumentsSymbol;
        private assignableCache;
        private subtypeCache;
        private identicalCache;
        private inResolvingOtherDeclsWalker;
        constructor(compilationSettings: ImmutableCompilationSettings, semanticInfoChain: SemanticInfoChain);
        private cachedArrayInterfaceType();
        public getArrayNamedType(): PullTypeSymbol;
        private cachedNumberInterfaceType();
        private cachedStringInterfaceType();
        private cachedBooleanInterfaceType();
        private cachedObjectInterfaceType();
        private cachedFunctionInterfaceType();
        private cachedIArgumentsInterfaceType();
        private cachedRegExpInterfaceType();
        private cachedFunctionArgumentsSymbol();
        private getApparentType(type);
        private setTypeChecked(ast, context);
        private canTypeCheckAST(ast, context);
        private setSymbolForAST(ast, symbol, context);
        private getSymbolForAST(ast, context);
        public getASTForDecl(decl: PullDecl): AST;
        public getNewErrorTypeSymbol(name?: string): PullErrorTypeSymbol;
        public getEnclosingDecl(decl: PullDecl): PullDecl;
        private getExportedMemberSymbol(symbol, parent);
        public _getNamedPropertySymbolOfAugmentedType(symbolName: string, parent: PullTypeSymbol): PullSymbol;
        private getNamedPropertySymbol(symbolName, declSearchKind, parent);
        private getSymbolFromDeclPath(symbolName, declPath, declSearchKind);
        private getVisibleDeclsFromDeclPath(declPath, declSearchKind);
        private addFilteredDecls(decls, declSearchKind, result);
        public getVisibleDecls(enclosingDecl: PullDecl): PullDecl[];
        public getVisibleContextSymbols(enclosingDecl: PullDecl, context: PullTypeResolutionContext): PullSymbol[];
        public getVisibleMembersFromExpression(expression: AST, enclosingDecl: PullDecl, context: PullTypeResolutionContext): PullSymbol[];
        private isAnyOrEquivalent(type);
        private resolveExternalModuleReference(idText, currentFileName);
        public resolveDeclaredSymbol<TSymbol extends PullSymbol>(symbol: TSymbol, context?: PullTypeResolutionContext): TSymbol;
        private resolveDeclaredSymbolWorker<TSymbol extends PullSymbol>(symbol, context);
        private resolveOtherDecl(otherDecl, context);
        private resolveOtherDeclarations(astName, context);
        private resolveSourceUnit(sourceUnit, context);
        private typeCheckSourceUnit(sourceUnit, context);
        private verifyUniquenessOfImportNamesInSourceUnit(sourceUnit);
        private resolveEnumDeclaration(ast, context);
        private typeCheckEnumDeclaration(ast, context);
        private postTypeCheckEnumDeclaration(ast, context);
        private checkInitializersInEnumDeclarations(decl, context);
        private resolveModuleDeclaration(ast, context);
        private ensureAllSymbolsAreBound(containerSymbol);
        private resolveModuleSymbol(containerSymbol, context, moduleDeclAST, moduleDeclNameAST, sourceUnitAST);
        private resolveFirstExportAssignmentStatement(moduleElements, context);
        private resolveSingleModuleDeclaration(ast, astName, context);
        private typeCheckModuleDeclaration(ast, context);
        private typeCheckSingleModuleDeclaration(ast, astName, context);
        private verifyUniquenessOfImportNamesInModule(decl);
        private checkUniquenessOfImportNames(decls, doesNameExistOutside?);
        private scanVariableDeclarationGroups(enclosingDecl, firstDeclHandler, subsequentDeclHandler?);
        private postTypeCheckModuleDeclaration(ast, context);
        private isTypeRefWithoutTypeArgs(term);
        public createInstantiatedType(type: PullTypeSymbol, typeArguments: PullTypeSymbol[]): PullTypeSymbol;
        private resolveReferenceTypeDeclaration(classOrInterface, name, heritageClauses, context);
        private resolveClassDeclaration(classDeclAST, context);
        private typeCheckTypeParametersOfTypeDeclaration(classOrInterface, context);
        private typeCheckClassDeclaration(classDeclAST, context);
        private postTypeCheckClassDeclaration(classDeclAST, context);
        private resolveTypeSymbolSignatures(typeSymbol, context);
        private resolveInterfaceDeclaration(interfaceDeclAST, context);
        private typeCheckInterfaceDeclaration(interfaceDeclAST, context);
        private checkInterfaceDeclForIdenticalTypeParameters(interfaceDeclAST, context);
        private checkTypeForDuplicateIndexSignatures(enclosingTypeSymbol);
        private filterSymbol(symbol, kind, enclosingDecl, context);
        private getMemberSymbolOfKind(symbolName, kind, pullTypeSymbol, enclosingDecl, context);
        private resolveIdentifierOfInternalModuleReference(importDecl, identifier, moduleSymbol, enclosingDecl, context);
        private resolveModuleReference(importDecl, moduleNameExpr, enclosingDecl, context, declPath);
        private resolveInternalModuleReference(importStatementAST, context);
        private resolveImportDeclaration(importStatementAST, context);
        private typeCheckImportDeclaration(importStatementAST, context);
        private postTypeCheckImportDeclaration(importStatementAST, context);
        private resolveExportAssignmentStatement(exportAssignmentAST, context);
        private resolveAnyFunctionTypeSignature(funcDeclAST, typeParameters, parameterList, returnTypeAnnotation, context);
        private resolveFunctionTypeSignatureParameter(argDeclAST, signature, enclosingDecl, context);
        private resolveFunctionExpressionParameter(argDeclAST, id, typeExpr, equalsValueClause, contextParam, enclosingDecl, context);
        private checkNameForCompilerGeneratedDeclarationCollision(astWithName, isDeclaration, name, context);
        private hasRestParameterCodeGen(someFunctionDecl);
        private checkArgumentsCollides(ast, context);
        private checkIndexOfRestArgumentInitializationCollides(ast, isDeclaration, context);
        private checkExternalModuleRequireExportsCollides(ast, name, context);
        private resolveObjectTypeTypeReference(objectType, context);
        private typeCheckObjectTypeTypeReference(objectType, context);
        private resolveTypeAnnotation(typeAnnotation, context);
        public resolveTypeReference(typeRef: AST, context: PullTypeResolutionContext): PullTypeSymbol;
        private getArrayType(elementType);
        private computeTypeReferenceSymbol(term, context);
        private genericTypeIsUsedWithoutRequiredTypeArguments(typeSymbol, term, context);
        private resolveMemberVariableDeclaration(varDecl, context);
        private resolvePropertySignature(varDecl, context);
        private resolveVariableDeclarator(varDecl, context);
        private resolveParameterList(list, context);
        private resolveParameter(parameter, context);
        private getEnumTypeSymbol(enumElement, context);
        private resolveEnumElement(enumElement, context);
        private typeCheckEnumElement(enumElement, context);
        private resolveEqualsValueClause(clause, isContextuallyTyped, context);
        private resolveVariableDeclaratorOrParameterOrEnumElement(varDeclOrParameter, modifiers, name, typeExpr, init, context);
        private resolveAndTypeCheckVariableDeclarationTypeExpr(varDeclOrParameter, name, typeExpr, context);
        private resolveAndTypeCheckVariableDeclaratorOrParameterInitExpr(varDeclOrParameter, name, typeExpr, init, context, typeExprSymbol);
        private typeCheckPropertySignature(varDecl, context);
        private typeCheckMemberVariableDeclaration(varDecl, context);
        private typeCheckVariableDeclarator(varDecl, context);
        private typeCheckParameter(parameter, context);
        private typeCheckVariableDeclaratorOrParameterOrEnumElement(varDeclOrParameter, modifiers, name, typeExpr, init, context);
        private isForInVariableDeclarator(ast);
        private checkSuperCaptureVariableCollides(superAST, isDeclaration, context);
        private checkThisCaptureVariableCollides(_thisAST, isDeclaration, context);
        private postTypeCheckVariableDeclaratorOrParameter(varDeclOrParameter, context);
        private resolveTypeParameterDeclaration(typeParameterAST, context);
        private resolveFirstTypeParameterDeclaration(typeParameterSymbol, context);
        private typeCheckTypeParameterDeclaration(typeParameterAST, context);
        private resolveConstraint(constraint, context);
        private resolveFunctionBodyReturnTypes(funcDeclAST, block, bodyExpression, signature, useContextualType, enclosingDecl, context);
        private typeCheckConstructorDeclaration(funcDeclAST, context);
        private constructorHasSuperCall(constructorDecl);
        private typeCheckFunctionExpression(funcDecl, isContextuallyTyped, context);
        private typeCheckCallSignature(funcDecl, context);
        private typeCheckConstructSignature(funcDecl, context);
        private typeCheckMethodSignature(funcDecl, context);
        private typeCheckMemberFunctionDeclaration(funcDecl, context);
        private containsSingleThrowStatement(block);
        private typeCheckAnyFunctionDeclaration(funcDeclAST, isStatic, name, typeParameters, parameters, returnTypeAnnotation, block, context);
        private checkThatNonVoidFunctionHasReturnExpressionOrThrowStatement(functionDecl, returnTypeAnnotation, returnTypeSymbol, block, context);
        private typeCheckIndexSignature(funcDeclAST, context);
        private postTypeCheckFunctionDeclaration(funcDeclAST, context);
        private resolveReturnTypeAnnotationOfFunctionDeclaration(funcDeclAST, returnTypeAnnotation, context);
        private resolveMemberFunctionDeclaration(funcDecl, context);
        private resolveCallSignature(funcDecl, context);
        private resolveConstructSignature(funcDecl, context);
        private resolveMethodSignature(funcDecl, context);
        private resolveAnyFunctionDeclaration(funcDecl, context);
        private resolveFunctionExpression(funcDecl, isContextuallyTyped, context);
        private resolveSimpleArrowFunctionExpression(funcDecl, isContextuallyTyped, context);
        private resolveParenthesizedArrowFunctionExpression(funcDecl, isContextuallyTyped, context);
        private getEnclosingClassDeclaration(ast);
        private resolveConstructorDeclaration(funcDeclAST, context);
        private resolveIndexMemberDeclaration(ast, context);
        private resolveIndexSignature(funcDeclAST, context);
        private resolveFunctionDeclaration(funcDeclAST, isStatic, name, typeParameters, parameterList, returnTypeAnnotation, block, context);
        private resolveGetterReturnTypeAnnotation(getterFunctionDeclarationAst, enclosingDecl, context);
        private resolveSetterArgumentTypeAnnotation(setterFunctionDeclarationAst, enclosingDecl, context);
        private resolveAccessorDeclaration(funcDeclAst, context);
        private typeCheckAccessorDeclaration(funcDeclAst, context);
        private resolveGetAccessorDeclaration(funcDeclAST, parameters, returnTypeAnnotation, block, setterAnnotatedType, context);
        private checkIfGetterAndSetterTypeMatch(funcDeclAST, context);
        private typeCheckGetAccessorDeclaration(funcDeclAST, context);
        static hasSetAccessorParameterTypeAnnotation(setAccessor: SetAccessor): boolean;
        private resolveSetAccessorDeclaration(funcDeclAST, parameterList, context);
        private typeCheckSetAccessorDeclaration(funcDeclAST, context);
        private resolveList(list, context);
        private resolveSeparatedList(list, context);
        private resolveVoidExpression(ast, context);
        private resolveLogicalOperation(ast, context);
        private typeCheckLogicalOperation(binex, context);
        private resolveLogicalNotExpression(ast, context);
        private resolveUnaryArithmeticOperation(ast, context);
        private resolvePostfixUnaryExpression(ast, context);
        private isAnyOrNumberOrEnum(type);
        private typeCheckUnaryArithmeticOperation(unaryExpression, context);
        private typeCheckPostfixUnaryExpression(unaryExpression, context);
        private resolveBinaryArithmeticExpression(binaryExpression, context);
        private typeCheckBinaryArithmeticExpression(binaryExpression, context);
        private resolveTypeOfExpression(ast, context);
        private resolveThrowStatement(ast, context);
        private resolveDeleteExpression(ast, context);
        private resolveInstanceOfExpression(ast, context);
        private typeCheckInstanceOfExpression(binaryExpression, context);
        private resolveCommaExpression(commaExpression, context);
        private resolveInExpression(ast, context);
        private typeCheckInExpression(binaryExpression, context);
        private resolveForStatement(ast, context);
        private resolveForInStatement(forInStatement, context);
        private typeCheckForInStatement(forInStatement, context);
        private resolveWhileStatement(ast, context);
        private typeCheckWhileStatement(ast, context);
        private resolveDoStatement(ast, context);
        private typeCheckDoStatement(ast, context);
        private resolveIfStatement(ast, context);
        private typeCheckIfStatement(ast, context);
        private resolveElseClause(ast, context);
        private typeCheckElseClause(ast, context);
        private resolveBlock(ast, context);
        private resolveVariableStatement(ast, context);
        private resolveVariableDeclarationList(ast, context);
        private resolveWithStatement(ast, context);
        private typeCheckWithStatement(ast, context);
        private resolveTryStatement(ast, context);
        private typeCheckTryStatement(ast, context);
        private resolveCatchClause(ast, context);
        private typeCheckCatchClause(ast, context);
        private resolveFinallyClause(ast, context);
        private typeCheckFinallyClause(ast, context);
        private getEnclosingFunctionDeclaration(ast);
        private resolveReturnExpression(expression, enclosingFunction, context);
        private typeCheckReturnExpression(expression, expressionType, enclosingFunction, context);
        private resolveReturnStatement(returnAST, context);
        private resolveSwitchStatement(ast, context);
        private typeCheckSwitchStatement(ast, context);
        private resolveLabeledStatement(ast, context);
        private typeCheckLabeledStatement(ast, context);
        private labelIsOnContinuableConstruct(statement);
        private resolveContinueStatement(ast, context);
        private isIterationStatement(ast);
        private isAnyFunctionExpressionOrDeclaration(ast);
        private inSwitchStatement(ast);
        private inIterationStatement(ast, crossFunctions);
        private getEnclosingLabels(ast, breakable, crossFunctions);
        private typeCheckContinueStatement(ast, context);
        private resolveBreakStatement(ast, context);
        private typeCheckBreakStatement(ast, context);
        public resolveAST(ast: AST, isContextuallyTyped: boolean, context: PullTypeResolutionContext): PullSymbol;
        private resolveExpressionAST(ast, isContextuallyOrInferentiallyTyped, context);
        private resolveExpressionWorker(ast, isContextuallyTyped, context);
        private typeCheckAST(ast, isContextuallyTyped, context);
        private processPostTypeCheckWorkItems(context);
        private postTypeCheck(ast, context);
        private resolveRegularExpressionLiteral();
        private postTypeCheckNameExpression(nameAST, context);
        private typeCheckNameExpression(nameAST, context);
        private resolveNameExpression(nameAST, context);
        private isInEnumDecl(decl);
        private getSomeInnermostFunctionScopeDecl(declPath);
        private isFromFunctionScope(nameSymbol, functionScopeDecl);
        private findConstructorDeclOfEnclosingType(decl);
        private checkNameAsPartOfInitializerExpressionForInstanceMemberVariable(nameAST, nameSymbol, context);
        private computeNameExpression(nameAST, context);
        private getCurrentParameterIndexForFunction(parameter, funcDecl);
        private resolveMemberAccessExpression(dottedNameAST, context);
        private resolveDottedNameExpression(dottedNameAST, expression, name, context);
        private computeDottedNameExpression(expression, name, context, checkSuperPrivateAndStaticAccess);
        private computeDottedNameExpressionFromLHS(lhs, expression, name, context, checkSuperPrivateAndStaticAccess);
        private resolveTypeNameExpression(nameAST, context);
        private computeTypeNameExpression(nameAST, context);
        private isInStaticMemberContext(decl);
        private isLeftSideOfQualifiedName(ast);
        private resolveGenericTypeReference(genericTypeAST, context);
        private resolveQualifiedName(dottedNameAST, context);
        private isLastNameOfModuleNameModuleReference(ast);
        private computeQualifiedName(dottedNameAST, context);
        private shouldContextuallyTypeAnyFunctionExpression(functionExpressionAST, typeParameters, parameters, returnTypeAnnotation, context);
        private resolveAnyFunctionExpression(funcDeclAST, typeParameters, parameters, returnTypeAnnotation, block, bodyExpression, isContextuallyTyped, context);
        private resolveAnyFunctionExpressionParameters(funcDeclAST, typeParameters, parameters, returnTypeAnnotation, isContextuallyTyped, context);
        private typeCheckSimpleArrowFunctionExpression(arrowFunction, isContextuallyTyped, context);
        private typeCheckParenthesizedArrowFunctionExpression(arrowFunction, isContextuallyTyped, context);
        private typeCheckAnyFunctionExpression(funcDeclAST, typeParameters, parameters, returnTypeAnnotation, block, bodyExpression, isContextuallyTyped, context);
        private resolveThisExpression(thisExpression, context);
        private inTypeArgumentList(ast);
        private inClassExtendsHeritageClause(ast);
        private inTypeQuery(ast);
        private inArgumentListOfSuperInvocation(ast);
        private inConstructorParameterList(ast);
        private isFunctionAccessorOrNonArrowFunctionExpression(decl);
        private isFunctionOrNonArrowFunctionExpression(decl);
        private typeCheckThisExpression(thisExpression, context, enclosingDecl);
        private getContextualClassSymbolForEnclosingDecl(ast, enclosingDecl);
        private inStaticMemberVariableDeclaration(ast);
        private resolveSuperExpression(ast, context);
        private typeCheckSuperExpression(ast, context, enclosingDecl);
        private resolveSimplePropertyAssignment(propertyAssignment, isContextuallyTyped, context);
        private resolveFunctionPropertyAssignment(funcProp, isContextuallyTyped, context);
        private typeCheckFunctionPropertyAssignment(funcProp, isContextuallyTyped, context);
        public resolveObjectLiteralExpression(expressionAST: ObjectLiteralExpression, isContextuallyTyped: boolean, context: PullTypeResolutionContext, additionalResults?: PullAdditionalObjectLiteralResolutionData): PullSymbol;
        private bindObjectLiteralMembers(objectLiteralDeclaration, objectLiteralTypeSymbol, objectLiteralMembers, isUsingExistingSymbol, pullTypeContext);
        private resolveObjectLiteralMembers(objectLiteralDeclaration, objectLiteralTypeSymbol, objectLiteralContextualType, objectLiteralMembers, stringIndexerSignature, numericIndexerSignature, allMemberTypes, allNumericMemberTypes, boundMemberSymbols, isUsingExistingSymbol, pullTypeContext, additionalResults?);
        private computeObjectLiteralExpression(objectLitAST, isContextuallyTyped, context, additionalResults?);
        private getPropertyAssignmentName(propertyAssignment);
        private stampObjectLiteralWithIndexSignature(objectLiteralSymbol, indexerTypeCandidates, contextualIndexSignature, context);
        private resolveArrayLiteralExpression(arrayLit, isContextuallyTyped, context);
        private computeArrayLiteralExpressionSymbol(arrayLit, isContextuallyTyped, context);
        private resolveElementAccessExpression(callEx, context);
        private typeCheckElementAccessExpression(callEx, context, symbolAndDiagnostic);
        private computeElementAccessExpressionSymbolAndDiagnostic(callEx, context);
        private getBothKindsOfIndexSignaturesIncludingAugmentedType(enclosingType, context);
        private getBothKindsOfIndexSignaturesExcludingAugmentedType(enclosingType, context);
        public _getBothKindsOfIndexSignatures(enclosingType: PullTypeSymbol, context: PullTypeResolutionContext, includeAugmentedType: boolean): IndexSignatureInfo;
        public _addUnhiddenSignaturesFromBaseType(derivedTypeSignatures: PullSignatureSymbol[], baseTypeSignatures: PullSignatureSymbol[], signaturesBeingAggregated: PullSignatureSymbol[]): void;
        private resolveBinaryAdditionOperation(binaryExpression, context);
        private bestCommonTypeOfTwoTypes(type1, type2, context);
        private bestCommonTypeOfThreeTypes(type1, type2, type3, context);
        private resolveLogicalOrExpression(binex, isContextuallyTyped, context);
        private resolveLogicalAndExpression(binex, context);
        private computeTypeOfConditionalExpression(leftType, rightType, isContextuallyTyped, context);
        private resolveConditionalExpression(trinex, isContextuallyTyped, context);
        private conditionExpressionTypesAreValid(leftType, rightType, expressionType, isContextuallyTyped, context);
        private resolveParenthesizedExpression(ast, context);
        private resolveExpressionStatement(ast, context);
        public resolveInvocationExpression(callEx: InvocationExpression, context: PullTypeResolutionContext, additionalResults?: PullAdditionalCallResolutionData): PullSymbol;
        private typeCheckInvocationExpression(callEx, context);
        private computeInvocationExpressionSymbol(callEx, context, additionalResults);
        public resolveObjectCreationExpression(callEx: ObjectCreationExpression, context: PullTypeResolutionContext, additionalResults?: PullAdditionalCallResolutionData): PullSymbol;
        private typeCheckObjectCreationExpression(callEx, context);
        private postOverloadResolutionDiagnostics(diagnostic, additionalResults, context);
        private computeObjectCreationExpressionSymbol(callEx, context, additionalResults);
        private instantiateSignatureInContext(signatureAToInstantiate, contextualSignatureB, context, shouldFixContextualSignatureParameterTypes);
        private resolveCastExpression(assertionExpression, context);
        private typeCheckCastExpression(assertionExpression, context, typeAssertionType);
        private resolveAssignmentExpression(binaryExpression, context);
        private getInstanceTypeForAssignment(lhs, type, context);
        public widenType(type: PullTypeSymbol, ast: AST, context: PullTypeResolutionContext): PullTypeSymbol;
        private widenArrayType(type, ast, context);
        private widenObjectLiteralType(type, ast, context);
        private needsToWidenObjectLiteralType(type, ast, context);
        public findBestCommonType(collection: IPullTypeCollection, context: PullTypeResolutionContext, comparisonInfo?: TypeComparisonInfo): PullTypeSymbol;
        private typeIsBestCommonTypeCandidate(candidateType, collection, context);
        private typesAreIdenticalInEnclosingTypes(t1, t2, context);
        private typesAreIdenticalWithNewEnclosingTypes(t1, t2, context);
        public typesAreIdentical(t1: PullTypeSymbol, t2: PullTypeSymbol, context: PullTypeResolutionContext): boolean;
        private typesAreIdenticalWorker(t1, t2, context);
        private propertiesAreIdentical(propertySymbol1, propertySymbol2, context);
        private propertiesAreIdenticalWithNewEnclosingTypes(type1, type2, property1, property2, context);
        private signatureGroupsAreIdentical(sg1, sg2, context);
        private typeParametersAreIdentical(tp1, tp2, context);
        private typeParametersAreIdenticalWorker(tp1, tp2, context);
        private setTypeParameterIdentity(tp1, tp2, val);
        public signaturesAreIdenticalWithNewEnclosingTypes(s1: PullSignatureSymbol, s2: PullSignatureSymbol, context: PullTypeResolutionContext, includingReturnType?: boolean): boolean;
        private signaturesAreIdentical(s1, s2, context, includingReturnType?);
        public signaturesAreIdenticalWorker(s1: PullSignatureSymbol, s2: PullSignatureSymbol, context: PullTypeResolutionContext, includingReturnType?: boolean): boolean;
        private signatureTypeParametersParametersAndReturnTypesAreIdentical(s1, s2, context, includingReturnType?);
        public signatureReturnTypesAreIdentical(s1: PullSignatureSymbol, s2: PullSignatureSymbol, context: PullTypeResolutionContext): boolean;
        private symbolsShareDeclaration(symbol1, symbol2);
        private sourceIsSubtypeOfTarget(source, target, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
        private sourceMembersAreAssignableToTargetMembers(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
        private sourcePropertyIsAssignableToTargetProperty(source, target, sourceProp, targetProp, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
        private sourceCallSignaturesAreAssignableToTargetCallSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
        private sourceConstructSignaturesAreAssignableToTargetConstructSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
        private sourceIndexSignaturesAreAssignableToTargetIndexSignatures(source, target, ast, context, comparisonInfo, isComparingInstantiatedSignatures?);
        private typeIsAssignableToFunction(source, ast, context);
        private signatureIsAssignableToTarget(s1, s2, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
        private sourceIsAssignableToTarget(source, target, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
        private sourceIsAssignableToTargetWithNewEnclosingTypes(source, target, ast, context, comparisonInfo?, isComparingInstantiatedSignatures?);
        private getSymbolForRelationshipCheck(symbol);
        private sourceIsRelatableToTargetInEnclosingTypes(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceIsRelatableToTargetWithNewEnclosingTypes(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceIsRelatableToTargetInCache(source, target, comparisonCache, comparisonInfo);
        private sourceIsRelatableToTarget(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private isSourceTypeParameterConstrainedToTargetTypeParameter(source, target);
        private sourceIsRelatableToTargetWorker(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceMembersAreRelatableToTargetMembers(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private infinitelyExpandingSourceTypeIsRelatableToTargetType(sourceType, targetType, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private infinitelyExpandingTypesAreIdentical(sourceType, targetType, context);
        private sourcePropertyIsRelatableToTargetProperty(source, target, sourceProp, targetProp, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceCallSignaturesAreRelatableToTargetCallSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceConstructSignaturesAreRelatableToTargetConstructSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private sourceIndexSignaturesAreRelatableToTargetIndexSignatures(source, target, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private signatureGroupIsRelatableToTarget(source, target, sourceSG, targetSG, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private signatureIsRelatableToTarget(sourceSig, targetSig, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private signatureIsRelatableToTargetWorker(sourceSig, targetSig, assignableTo, comparisonCache, ast, context, comparisonInfo, isComparingInstantiatedSignatures);
        private resolveOverloads(application, group, haveTypeArgumentsAtCallSite, context, diagnostics);
        private getCallTargetErrorSpanAST(callEx);
        private overloadHasCorrectArity(signature, args);
        private overloadIsApplicable(signature, args, context, comparisonInfo);
        private overloadIsApplicableForArgument(paramType, arg, argIndex, context, comparisonInfo);
        private overloadIsApplicableForAnyFunctionExpressionArgument(paramType, arg, typeParameters, parameters, returnTypeAnnotation, block, bodyExpression, argIndex, context, comparisonInfo);
        private overloadIsApplicableForObjectLiteralArgument(paramType, arg, argIndex, context, comparisonInfo);
        private overloadIsApplicableForArrayLiteralArgument(paramType, arg, argIndex, context, comparisonInfo);
        private overloadIsApplicableForOtherArgument(paramType, arg, argIndex, context, comparisonInfo);
        private overloadIsApplicableForArgumentHelper(paramType, argSym, argumentIndex, comparisonInfo, arg, context);
        private inferArgumentTypesForSignature(argContext, comparisonInfo, context);
        private typeParametersAreInScopeAtArgumentList(typeParameters, args);
        private relateTypeToTypeParametersInEnclosingType(expressionType, parameterType, argContext, context);
        public relateTypeToTypeParametersWithNewEnclosingTypes(expressionType: PullTypeSymbol, parameterType: PullTypeSymbol, argContext: TypeArgumentInferenceContext, context: PullTypeResolutionContext): void;
        public relateTypeToTypeParameters(expressionType: PullTypeSymbol, parameterType: PullTypeSymbol, argContext: TypeArgumentInferenceContext, context: PullTypeResolutionContext): void;
        private relateTypeArgumentsOfTypeToTypeParameters(expressionType, parameterType, argContext, context);
        private relateInifinitelyExpandingTypeToTypeParameters(expressionType, parameterType, argContext, context);
        private relateFunctionSignatureToTypeParameters(expressionSignature, parameterSignature, argContext, context);
        private relateObjectTypeToTypeParameters(objectType, parameterType, argContext, context);
        private relateSignatureGroupToTypeParameters(argumentSignatures, parameterSignatures, signatureKind, argContext, context);
        private alterPotentialGenericFunctionTypeToInstantiatedFunctionTypeForTypeArgumentInference(expressionSymbol, context);
        private isFunctionTypeWithExactlyOneCallSignatureAndNoOtherMembers(type, callSignatureShouldBeGeneric);
        public instantiateTypeToAny(typeToSpecialize: PullTypeSymbol, context: PullTypeResolutionContext): PullTypeSymbol;
        public instantiateSignatureToAny(signature: PullSignatureSymbol): PullSignatureSymbol;
        static globalTypeCheckPhase: number;
        static typeCheck(compilationSettings: ImmutableCompilationSettings, semanticInfoChain: SemanticInfoChain, document: Document): void;
        private validateVariableDeclarationGroups(enclosingDecl, context);
        private typeCheckFunctionOverloads(funcDecl, context, signature?, allSignatures?);
        private checkSymbolPrivacy(declSymbol, symbol, privacyErrorReporter);
        private checkTypePrivacyOfSignatures(declSymbol, signatures, privacyErrorReporter);
        private typeParameterOfTypeDeclarationPrivacyErrorReporter(classOrInterface, typeParameterAST, typeParameter, symbol, context);
        private baseListPrivacyErrorReporter(classOrInterface, declSymbol, baseAst, isExtendedType, symbol, context);
        private variablePrivacyErrorReporter(declAST, declSymbol, symbol, context);
        private checkFunctionTypePrivacy(funcDeclAST, isStatic, typeParameters, parameters, returnTypeAnnotation, block, context);
        private functionTypeArgumentArgumentTypePrivacyErrorReporter(declAST, isStatic, typeParameterAST, typeParameter, symbol, context);
        private functionArgumentTypePrivacyErrorReporter(declAST, isStatic, parameters, argIndex, paramSymbol, symbol, context);
        private functionReturnTypePrivacyErrorReporter(declAST, isStatic, returnTypeAnnotation, block, funcReturnType, symbol, context);
        private enclosingClassIsDerived(classDecl);
        private isSuperInvocationExpression(ast);
        private isSuperInvocationExpressionStatement(node);
        private getFirstStatementOfBlockOrNull(block);
        private superCallMustBeFirstStatementInConstructor(constructorDecl);
        private checkForThisCaptureInArrowFunction(expression);
        private typeCheckMembersAgainstIndexer(containerType, containerTypeDecl, context);
        private determineRelevantIndexerForMember(member, numberIndexSignature, stringIndexSignature);
        private reportErrorThatMemberIsNotSubtypeOfIndexer(member, indexSignature, astForError, context, comparisonInfo);
        private typeCheckIfTypeMemberPropertyOkToOverride(typeSymbol, extendedType, typeMember, extendedTypeMember, enclosingDecl, comparisonInfo);
        private typeCheckIfTypeExtendsType(classOrInterface, name, typeSymbol, extendedType, enclosingDecl, context);
        private typeCheckIfClassImplementsType(classDecl, classSymbol, implementedType, enclosingDecl, context);
        private computeValueSymbolFromAST(valueDeclAST, context);
        private hasClassTypeSymbolConflictAsValue(baseDeclAST, typeSymbol, enclosingDecl, context);
        private typeCheckBase(classOrInterface, name, typeSymbol, baseDeclAST, isExtendedType, enclosingDecl, context);
        private typeCheckBases(classOrInterface, name, heritageClauses, typeSymbol, enclosingDecl, context);
        private checkTypeCompatibilityBetweenBases(name, typeSymbol, context);
        private checkNamedPropertyIdentityBetweenBases(interfaceName, interfaceSymbol, baseTypeSymbol, inheritedMembersMap, context);
        private checkIndexSignatureIdentityBetweenBases(interfaceName, interfaceSymbol, baseTypeSymbol, allInheritedSignatures, derivedTypeHasOwnNumberSignature, derivedTypeHasOwnStringSignature, context);
        private checkInheritedMembersAgainstInheritedIndexSignatures(interfaceName, interfaceSymbol, inheritedIndexSignatures, inheritedMembers, context);
        private checkThatInheritedNumberSignatureIsSubtypeOfInheritedStringSignature(interfaceName, interfaceSymbol, inheritedIndexSignatures, context);
        private checkAssignability(ast, source, target, context);
        private isReference(ast, astSymbol);
        private checkForSuperMemberAccess(expression, name, resolvedName, context);
        private getEnclosingDeclForAST(ast);
        private getEnclosingSymbolForAST(ast);
        private checkForPrivateMemberAccess(name, expressionType, resolvedName, context);
        public instantiateType(type: PullTypeSymbol, typeParameterArgumentMap: TypeArgumentMap): PullTypeSymbol;
        public instantiateTypeParameter(typeParameter: PullTypeParameterSymbol, typeParameterArgumentMap: TypeArgumentMap): PullTypeParameterSymbol;
        public instantiateSignature(signature: PullSignatureSymbol, typeParameterArgumentMap: TypeArgumentMap): PullSignatureSymbol;
    }
    class TypeComparisonInfo {
        public onlyCaptureFirstError: boolean;
        public flags: TypeRelationshipFlags;
        public message: string;
        public stringConstantVal: AST;
        private indent;
        constructor(sourceComparisonInfo?: TypeComparisonInfo, useSameIndent?: boolean);
        private indentString();
        public addMessage(message: string): void;
    }
    function getPropertyAssignmentNameTextFromIdentifier(identifier: AST): {
        actualText: string;
        memberName: string;
    };
    function isTypesOnlyLocation(ast: AST): boolean;
}
declare module TypeScript {
    var declCacheHit: number;
    var declCacheMiss: number;
    var symbolCacheHit: number;
    var symbolCacheMiss: number;
    class SemanticInfoChain {
        private compiler;
        private logger;
        private documents;
        private fileNameToDocument;
        public anyTypeDecl: PullDecl;
        public booleanTypeDecl: PullDecl;
        public numberTypeDecl: PullDecl;
        public stringTypeDecl: PullDecl;
        public nullTypeDecl: PullDecl;
        public undefinedTypeDecl: PullDecl;
        public voidTypeDecl: PullDecl;
        public undefinedValueDecl: PullDecl;
        public anyTypeSymbol: PullPrimitiveTypeSymbol;
        public booleanTypeSymbol: PullPrimitiveTypeSymbol;
        public numberTypeSymbol: PullPrimitiveTypeSymbol;
        public stringTypeSymbol: PullPrimitiveTypeSymbol;
        public nullTypeSymbol: PullPrimitiveTypeSymbol;
        public undefinedTypeSymbol: PullPrimitiveTypeSymbol;
        public voidTypeSymbol: PullPrimitiveTypeSymbol;
        public undefinedValueSymbol: PullSymbol;
        public emptyTypeSymbol: PullTypeSymbol;
        private astSymbolMap;
        private astAliasSymbolMap;
        private astCallResolutionDataMap;
        private declSymbolMap;
        private declSignatureSymbolMap;
        private declCache;
        private symbolCache;
        private fileNameToDiagnostics;
        private _binder;
        private _resolver;
        private _topLevelDecls;
        private _fileNames;
        constructor(compiler: TypeScriptCompiler, logger: ILogger);
        public getDocument(fileName: string): Document;
        public lineMap(fileName: string): LineMap;
        public fileNames(): string[];
        private bindPrimitiveSymbol<TSymbol extends PullSymbol>(decl, newSymbol);
        private addPrimitiveTypeSymbol(decl);
        private addPrimitiveValueSymbol(decl, type);
        private resetGlobalSymbols();
        public addDocument(document: Document): void;
        public removeDocument(fileName: string): void;
        private getDeclPathCacheID(declPath, declKind);
        public findTopLevelSymbol(name: string, kind: PullElementKind, doNotGoPastThisDecl: PullDecl): PullSymbol;
        private findTopLevelSymbolInDecl(topLevelDecl, name, kind, doNotGoPastThisDecl);
        public findExternalModule(id: string): PullContainerSymbol;
        public findAmbientExternalModuleInGlobalContext(id: string): PullContainerSymbol;
        public findDecls(declPath: string[], declKind: PullElementKind): PullDecl[];
        public findDeclsFromPath(declPath: PullDecl[], declKind: PullElementKind): PullDecl[];
        public findSymbol(declPath: string[], declType: PullElementKind): PullSymbol;
        public cacheGlobalSymbol(symbol: PullSymbol, kind: PullElementKind): void;
        public invalidate(oldSettings?: ImmutableCompilationSettings, newSettings?: ImmutableCompilationSettings): void;
        private settingsChangeAffectsSyntax(before, after);
        public setSymbolForAST(ast: AST, symbol: PullSymbol): void;
        public getSymbolForAST(ast: AST): PullSymbol;
        public setAliasSymbolForAST(ast: AST, symbol: PullTypeAliasSymbol): void;
        public getAliasSymbolForAST(ast: AST): PullTypeAliasSymbol;
        public getCallResolutionDataForAST(ast: AST): PullAdditionalCallResolutionData;
        public setCallResolutionDataForAST(ast: AST, callResolutionData: PullAdditionalCallResolutionData): void;
        public setSymbolForDecl(decl: PullDecl, symbol: PullSymbol): void;
        public getSymbolForDecl(decl: PullDecl): PullSymbol;
        public setSignatureSymbolForDecl(decl: PullDecl, signatureSymbol: PullSignatureSymbol): void;
        public getSignatureSymbolForDecl(decl: PullDecl): PullSignatureSymbol;
        public addDiagnostic(diagnostic: Diagnostic): void;
        public getDiagnostics(fileName: string): Diagnostic[];
        public getBinder(): PullSymbolBinder;
        public getResolver(): PullTypeResolver;
        public addSyntheticIndexSignature(containingDecl: PullDecl, containingSymbol: PullTypeSymbol, ast: AST, indexParamName: string, indexParamType: PullTypeSymbol, returnType: PullTypeSymbol): void;
        public getDeclForAST(ast: AST): PullDecl;
        public getEnclosingDecl(ast: AST): PullDecl;
        public setDeclForAST(ast: AST, decl: PullDecl): void;
        public getASTForDecl(decl: PullDecl): AST;
        public setASTForDecl(decl: PullDecl, ast: AST): void;
        public topLevelDecl(fileName: string): PullDecl;
        public topLevelDecls(): PullDecl[];
        public addDiagnosticFromAST(ast: AST, diagnosticKey: string, _arguments?: any[], additionalLocations?: Location[]): void;
        public diagnosticFromAST(ast: AST, diagnosticKey: string, _arguments?: any[], additionalLocations?: Location[]): Diagnostic;
        public locationFromAST(ast: AST): Location;
        public duplicateIdentifierDiagnosticFromAST(ast: AST, identifier: string, additionalLocationAST: AST): Diagnostic;
        public addDuplicateIdentifierDiagnosticFromAST(ast: AST, identifier: string, additionalLocationAST: AST): void;
    }
}
declare module TypeScript {
    module DeclarationCreator {
        function create(document: Document, semanticInfoChain: SemanticInfoChain, compilationSettings: ImmutableCompilationSettings): PullDecl;
    }
}
declare module TypeScript {
    class PullSymbolBinder {
        private semanticInfoChain;
        private declsBeingBound;
        private inBindingOtherDeclsWalker;
        constructor(semanticInfoChain: SemanticInfoChain);
        private getParent(decl, returnInstanceType?);
        private findDeclsInContext(startingDecl, declKind, searchGlobally);
        private getExistingSymbol(decl, searchKind, parent);
        private checkThatExportsMatch(decl, prevSymbol, reportError?);
        private getIndexForInsertingSignatureAtEndOfEnclosingDeclInSignatureList(signature, currentSignatures);
        private bindEnumDeclarationToPullSymbol(enumContainerDecl);
        private bindEnumIndexerDeclsToPullSymbols(enumContainerSymbol);
        private findExistingVariableSymbolForModuleValueDecl(decl);
        private bindModuleDeclarationToPullSymbol(moduleContainerDecl);
        private bindImportDeclaration(importDeclaration);
        private ensurePriorDeclarationsAreBound(container, currentDecl);
        private bindClassDeclarationToPullSymbol(classDecl);
        private bindInterfaceDeclarationToPullSymbol(interfaceDecl);
        private bindObjectTypeDeclarationToPullSymbol(objectDecl);
        private bindConstructorTypeDeclarationToPullSymbol(constructorTypeDeclaration);
        private bindVariableDeclarationToPullSymbol(variableDeclaration);
        private bindCatchVariableToPullSymbol(variableDeclaration);
        private bindEnumMemberDeclarationToPullSymbol(propertyDeclaration);
        private bindPropertyDeclarationToPullSymbol(propertyDeclaration);
        private bindParameterSymbols(functionDeclaration, parameterList, funcType, signatureSymbol);
        private bindFunctionDeclarationToPullSymbol(functionDeclaration);
        private bindFunctionExpressionToPullSymbol(functionExpressionDeclaration);
        private bindFunctionTypeDeclarationToPullSymbol(functionTypeDeclaration);
        private bindMethodDeclarationToPullSymbol(methodDeclaration);
        private bindStaticPrototypePropertyOfClass(classAST, classTypeSymbol, constructorTypeSymbol);
        private bindConstructorDeclarationToPullSymbol(constructorDeclaration);
        private bindConstructSignatureDeclarationToPullSymbol(constructSignatureDeclaration);
        private bindCallSignatureDeclarationToPullSymbol(callSignatureDeclaration);
        private bindIndexSignatureDeclarationToPullSymbol(indexSignatureDeclaration);
        private bindGetAccessorDeclarationToPullSymbol(getAccessorDeclaration);
        private bindSetAccessorDeclarationToPullSymbol(setAccessorDeclaration);
        private getDeclsToBind(decl);
        private shouldBindDeclaration(decl);
        public bindDeclToPullSymbol(decl: PullDecl): void;
        private bindAllDeclsToPullSymbol(askedDecl);
        private bindSingleDeclToPullSymbol(decl);
    }
}
declare module TypeScript {
    module PullHelpers {
        function diagnosticFromDecl(decl: PullDecl, diagnosticKey: string, _arguments?: any[], additionalLocations?: Location[]): Diagnostic;
        function resolveDeclaredSymbolToUseType(symbol: PullSymbol): void;
        interface SignatureInfoForFuncDecl {
            signature: PullSignatureSymbol;
            allSignatures: PullSignatureSymbol[];
        }
        function getSignatureForFuncDecl(functionDecl: PullDecl): {
            signature: PullSignatureSymbol;
            allSignatures: PullSignatureSymbol[];
        };
        function getAccessorSymbol(getterOrSetter: AST, semanticInfoChain: SemanticInfoChain): PullAccessorSymbol;
        function getGetterAndSetterFunction(funcDecl: AST, semanticInfoChain: SemanticInfoChain): {
            getter: GetAccessor;
            setter: SetAccessor;
        };
        function symbolIsEnum(source: PullSymbol): boolean;
        function symbolIsModule(symbol: PullSymbol): boolean;
        function isNameNumeric(name: string): boolean;
        function typeSymbolsAreIdentical(a: PullTypeSymbol, b: PullTypeSymbol): boolean;
        function getRootType(type: PullTypeSymbol): PullTypeSymbol;
        function isSymbolLocal(symbol: PullSymbol): boolean;
        function isExportedSymbolInClodule(symbol: PullSymbol): boolean;
        function isSymbolDeclaredInScopeChain(symbol: PullSymbol, scopeSymbol: PullSymbol): boolean;
        interface PullTypeSymbolStructureWalker {
            memberSymbolWalk(memberSymbol: PullSymbol): boolean;
            callSignatureWalk(signatureSymbol: PullSignatureSymbol): boolean;
            constructSignatureWalk(signatureSymbol: PullSignatureSymbol): boolean;
            indexSignatureWalk(signatureSymbol: PullSignatureSymbol): boolean;
            signatureParameterWalk(parameterSymbol: PullSymbol): boolean;
            signatureReturnTypeWalk(returnType: PullTypeSymbol): boolean;
        }
        function walkPullTypeSymbolStructure(typeSymbol: PullTypeSymbol, walker: PullTypeSymbolStructureWalker): void;
        class OtherPullDeclsWalker {
            private currentlyWalkingOtherDecls;
            public walkOtherPullDecls(currentDecl: PullDecl, otherDecls: PullDecl[], callBack: (otherDecl: PullDecl) => void): void;
        }
    }
}
declare module TypeScript {
    class WrapsTypeParameterCache {
        private _wrapsTypeParameterCache;
        public getWrapsTypeParameter(typeParameterArgumentMap: TypeArgumentMap): number;
        public setWrapsTypeParameter(typeParameterArgumentMap: TypeArgumentMap, wrappingTypeParameterID: number): void;
    }
    module PullInstantiationHelpers {
        class MutableTypeArgumentMap {
            public typeParameterArgumentMap: TypeArgumentMap;
            public createdDuplicateTypeArgumentMap: boolean;
            constructor(typeParameterArgumentMap: TypeArgumentMap);
            public ensureTypeArgumentCopy(): void;
        }
        function instantiateTypeArgument(resolver: PullTypeResolver, symbol: InstantiableSymbol, mutableTypeParameterMap: MutableTypeArgumentMap): void;
        function cleanUpTypeArgumentMap(symbol: InstantiableSymbol, mutableTypeArgumentMap: MutableTypeArgumentMap): void;
        function getAllowedToReferenceTypeParametersFromDecl(decl: PullDecl): PullTypeParameterSymbol[];
        function createTypeParameterArgumentMap(typeParameters: PullTypeParameterSymbol[], typeArguments: PullTypeSymbol[]): TypeArgumentMap;
        function updateTypeParameterArgumentMap(typeParameters: PullTypeParameterSymbol[], typeArguments: PullTypeSymbol[], typeParameterArgumentMap: TypeArgumentMap): TypeArgumentMap;
        function updateMutableTypeParameterArgumentMap(typeParameters: PullTypeParameterSymbol[], typeArguments: PullTypeSymbol[], mutableMap: MutableTypeArgumentMap): void;
        function twoTypesAreInstantiationsOfSameNamedGenericType(type1: PullTypeSymbol, type2: PullTypeSymbol): boolean;
    }
}
declare module TypeScript {
    var fileResolutionTime: number;
    var fileResolutionIOTime: number;
    var fileResolutionScanImportsTime: number;
    var fileResolutionImportFileSearchTime: number;
    var fileResolutionGetDefaultLibraryTime: number;
    var sourceCharactersCompiled: number;
    var syntaxTreeParseTime: number;
    var syntaxDiagnosticsTime: number;
    var astTranslationTime: number;
    var typeCheckTime: number;
    var compilerResolvePathTime: number;
    var compilerDirectoryNameTime: number;
    var compilerDirectoryExistsTime: number;
    var compilerFileExistsTime: number;
    var emitTime: number;
    var emitWriteFileTime: number;
    var declarationEmitTime: number;
    var declarationEmitIsExternallyVisibleTime: number;
    var declarationEmitTypeSignatureTime: number;
    var declarationEmitGetBoundDeclTypeTime: number;
    var declarationEmitIsOverloadedCallSignatureTime: number;
    var declarationEmitFunctionDeclarationGetSymbolTime: number;
    var declarationEmitGetBaseTypeTime: number;
    var declarationEmitGetAccessorFunctionTime: number;
    var declarationEmitGetTypeParameterSymbolTime: number;
    var declarationEmitGetImportDeclarationSymbolTime: number;
    var ioHostResolvePathTime: number;
    var ioHostDirectoryNameTime: number;
    var ioHostCreateDirectoryStructureTime: number;
    var ioHostWriteFileTime: number;
    interface PullSymbolInfo {
        symbol: PullSymbol;
        aliasSymbol: PullTypeAliasSymbol;
        ast: AST;
        enclosingScopeSymbol: PullSymbol;
    }
    interface PullCallSymbolInfo {
        targetSymbol: PullSymbol;
        resolvedSignatures: PullSignatureSymbol[];
        candidateSignature: PullSignatureSymbol;
        isConstructorCall: boolean;
        ast: AST;
        enclosingScopeSymbol: PullSymbol;
    }
    interface PullVisibleSymbolsInfo {
        symbols: PullSymbol[];
        enclosingScopeSymbol: PullSymbol;
    }
    enum EmitOutputResult {
        Succeeded = 0,
        FailedBecauseOfSyntaxErrors = 1,
        FailedBecauseOfCompilerOptionsErrors = 2,
        FailedToGenerateDeclarationsBecauseOfSemanticErrors = 3,
    }
    class EmitOutput {
        public outputFiles: OutputFile[];
        public emitOutputResult: EmitOutputResult;
        constructor(emitOutputResult?: EmitOutputResult);
    }
    enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    class OutputFile {
        public name: string;
        public writeByteOrderMark: boolean;
        public text: string;
        public fileType: OutputFileType;
        public sourceMapEntries: SourceMapEntry[];
        constructor(name: string, writeByteOrderMark: boolean, text: string, fileType: OutputFileType, sourceMapEntries?: SourceMapEntry[]);
    }
    class CompileResult {
        public diagnostics: Diagnostic[];
        public outputFiles: OutputFile[];
        static fromDiagnostics(diagnostics: Diagnostic[]): CompileResult;
        static fromOutputFiles(outputFiles: OutputFile[]): CompileResult;
    }
    class TypeScriptCompiler {
        public logger: ILogger;
        private _settings;
        private semanticInfoChain;
        constructor(logger?: ILogger, _settings?: ImmutableCompilationSettings);
        public compilationSettings(): ImmutableCompilationSettings;
        public setCompilationSettings(newSettings: ImmutableCompilationSettings): void;
        public getDocument(fileName: string): Document;
        public cleanupSemanticCache(): void;
        public addFile(fileName: string, scriptSnapshot: IScriptSnapshot, byteOrderMark: ByteOrderMark, version: number, isOpen: boolean, referencedFiles?: string[]): void;
        public updateFile(fileName: string, scriptSnapshot: IScriptSnapshot, version: number, isOpen: boolean, textChangeRange: TextChangeRange): void;
        public removeFile(fileName: string): void;
        public mapOutputFileName(document: Document, emitOptions: EmitOptions, extensionChanger: (fname: string, wholeFileNameReplaced: boolean) => string): string;
        private writeByteOrderMarkForDocument(document);
        static mapToDTSFileName(fileName: string, wholeFileNameReplaced: boolean): string;
        public _shouldEmit(document: Document): boolean;
        public _shouldEmitDeclarations(document: Document): boolean;
        private emitDocumentDeclarationsWorker(document, emitOptions, declarationEmitter?);
        public _emitDocumentDeclarations(document: Document, emitOptions: EmitOptions, onSingleFileEmitComplete: (files: OutputFile) => void, sharedEmitter: DeclarationEmitter): DeclarationEmitter;
        public emitAllDeclarations(resolvePath: (path: string) => string): EmitOutput;
        public emitDeclarations(fileName: string, resolvePath: (path: string) => string): EmitOutput;
        public canEmitDeclarations(fileName: string): boolean;
        static mapToFileNameExtension(extension: string, fileName: string, wholeFileNameReplaced: boolean): string;
        static mapToJSFileName(fileName: string, wholeFileNameReplaced: boolean): string;
        private emitDocumentWorker(document, emitOptions, emitter?);
        public _emitDocument(document: Document, emitOptions: EmitOptions, onSingleFileEmitComplete: (files: OutputFile[]) => void, sharedEmitter: Emitter): Emitter;
        public emitAll(resolvePath: (path: string) => string): EmitOutput;
        public emit(fileName: string, resolvePath: (path: string) => string): EmitOutput;
        public compile(resolvePath: (path: string) => string, continueOnDiagnostics?: boolean): Iterator<CompileResult>;
        public getSyntacticDiagnostics(fileName: string): Diagnostic[];
        private getSyntaxTree(fileName);
        private getSourceUnit(fileName);
        public getSemanticDiagnostics(fileName: string): Diagnostic[];
        public getCompilerOptionsDiagnostics(resolvePath: (path: string) => string): Diagnostic[];
        public resolveAllFiles(): void;
        public getSymbolOfDeclaration(decl: PullDecl): PullSymbol;
        private extractResolutionContextFromAST(resolver, ast, document, propagateContextualTypes);
        private extractResolutionContextForVariable(inContextuallyTypedAssignment, propagateContextualTypes, resolver, resolutionContext, enclosingDecl, assigningAST, init);
        private getASTPath(ast);
        public pullGetSymbolInformationFromAST(ast: AST, document: Document): PullSymbolInfo;
        public pullGetCallInformationFromAST(ast: AST, document: Document): PullCallSymbolInfo;
        public pullGetVisibleMemberSymbolsFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
        public pullGetVisibleDeclsFromAST(ast: AST, document: Document): PullDecl[];
        public pullGetContextualMembersFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
        public pullGetDeclInformation(decl: PullDecl, ast: AST, document: Document): PullSymbolInfo;
        public topLevelDeclaration(fileName: string): PullDecl;
        public getDeclForAST(ast: AST): PullDecl;
        public fileNames(): string[];
        public topLevelDecl(fileName: string): PullDecl;
        private static getLocationText(location, resolvePath);
        static getFullDiagnosticText(diagnostic: Diagnostic, resolvePath: (path: string) => string): string;
    }
    function compareDataObjects(dst: any, src: any): boolean;
}
declare module TypeScript {
    enum GenerativeTypeClassification {
        Unknown = 0,
        Open = 1,
        Closed = 2,
        InfinitelyExpanding = 3,
    }
    interface TypeArgumentMap {
        [n: number]: PullTypeSymbol;
    }
    class PullTypeReferenceSymbol extends PullTypeSymbol {
        public referencedTypeSymbol: PullTypeSymbol;
        static createTypeReference(type: PullTypeSymbol): PullTypeReferenceSymbol;
        constructor(referencedTypeSymbol: PullTypeSymbol);
        public isTypeReference(): boolean;
        public isResolved: boolean;
        public setResolved(): void;
        public setUnresolved(): void;
        public invalidate(): void;
        public ensureReferencedTypeIsResolved(): void;
        public getReferencedTypeSymbol(): PullTypeSymbol;
        public _getResolver(): PullTypeResolver;
        public hasMembers(): boolean;
        public setAssociatedContainerType(type: PullTypeSymbol): void;
        public getAssociatedContainerType(): PullTypeSymbol;
        public getFunctionSymbol(): PullSymbol;
        public setFunctionSymbol(symbol: PullSymbol): void;
        public addContainedNonMember(nonMember: PullSymbol): void;
        public findContainedNonMemberContainer(containerName: string, kind?: PullElementKind): PullTypeSymbol;
        public addMember(memberSymbol: PullSymbol): void;
        public addEnclosedMemberType(enclosedType: PullTypeSymbol): void;
        public addEnclosedMemberContainer(enclosedContainer: PullTypeSymbol): void;
        public addEnclosedNonMember(enclosedNonMember: PullSymbol): void;
        public addEnclosedNonMemberType(enclosedNonMemberType: PullTypeSymbol): void;
        public addEnclosedNonMemberContainer(enclosedNonMemberContainer: PullTypeSymbol): void;
        public addTypeParameter(typeParameter: PullTypeParameterSymbol): void;
        public addConstructorTypeParameter(typeParameter: PullTypeParameterSymbol): void;
        public findContainedNonMember(name: string): PullSymbol;
        public findContainedNonMemberType(typeName: string, kind?: PullElementKind): PullTypeSymbol;
        public getMembers(): PullSymbol[];
        public setHasDefaultConstructor(hasOne?: boolean): void;
        public getHasDefaultConstructor(): boolean;
        public getConstructorMethod(): PullSymbol;
        public setConstructorMethod(constructorMethod: PullSymbol): void;
        public getTypeParameters(): PullTypeParameterSymbol[];
        public isGeneric(): boolean;
        public addSpecialization(specializedVersionOfThisType: PullTypeSymbol, substitutingTypes: PullTypeSymbol[]): void;
        public getSpecialization(substitutingTypes: PullTypeSymbol[]): PullTypeSymbol;
        public getKnownSpecializations(): PullTypeSymbol[];
        public getTypeArguments(): PullTypeSymbol[];
        public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
        public appendCallSignature(callSignature: PullSignatureSymbol): void;
        public insertCallSignatureAtIndex(callSignature: PullSignatureSymbol, index: number): void;
        public appendConstructSignature(callSignature: PullSignatureSymbol): void;
        public insertConstructSignatureAtIndex(callSignature: PullSignatureSymbol, index: number): void;
        public addIndexSignature(indexSignature: PullSignatureSymbol): void;
        public hasOwnCallSignatures(): boolean;
        public getCallSignatures(): PullSignatureSymbol[];
        public hasOwnConstructSignatures(): boolean;
        public getConstructSignatures(): PullSignatureSymbol[];
        public hasOwnIndexSignatures(): boolean;
        public getIndexSignatures(): PullSignatureSymbol[];
        public addImplementedType(implementedType: PullTypeSymbol): void;
        public getImplementedTypes(): PullTypeSymbol[];
        public addExtendedType(extendedType: PullTypeSymbol): void;
        public getExtendedTypes(): PullTypeSymbol[];
        public addTypeThatExtendsThisType(type: PullTypeSymbol): void;
        public getTypesThatExtendThisType(): PullTypeSymbol[];
        public addTypeThatExplicitlyImplementsThisType(type: PullTypeSymbol): void;
        public getTypesThatExplicitlyImplementThisType(): PullTypeSymbol[];
        public isValidBaseKind(baseType: PullTypeSymbol, isExtendedType: boolean): boolean;
        public findMember(name: string, lookInParent?: boolean): PullSymbol;
        public findNestedType(name: string, kind?: PullElementKind): PullTypeSymbol;
        public findNestedContainer(name: string, kind?: PullElementKind): PullTypeSymbol;
        public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
        public findTypeParameter(name: string): PullTypeParameterSymbol;
        public hasOnlyOverloadCallSignatures(): boolean;
    }
    var nSpecializationsCreated: number;
    var nSpecializedSignaturesCreated: number;
    var nSpecializedTypeParameterCreated: number;
    class PullInstantiatedTypeReferenceSymbol extends PullTypeReferenceSymbol {
        public referencedTypeSymbol: PullTypeSymbol;
        private _typeParameterArgumentMap;
        public isInstanceReferenceType: boolean;
        private _instantiatedMembers;
        private _allInstantiatedMemberNameCache;
        private _instantiatedMemberNameCache;
        private _instantiatedCallSignatures;
        private _instantiatedConstructSignatures;
        private _instantiatedIndexSignatures;
        private _typeArgumentReferences;
        private _instantiatedConstructorMethod;
        private _instantiatedAssociatedContainerType;
        private _isArray;
        public getIsSpecialized(): boolean;
        private _generativeTypeClassification;
        public getGenerativeTypeClassification(enclosingType: PullTypeSymbol): GenerativeTypeClassification;
        public isArrayNamedTypeReference(): boolean;
        public getElementType(): PullTypeSymbol;
        public getReferencedTypeSymbol(): PullTypeSymbol;
        static create(resolver: PullTypeResolver, type: PullTypeSymbol, typeParameterArgumentMap: TypeArgumentMap): PullInstantiatedTypeReferenceSymbol;
        constructor(referencedTypeSymbol: PullTypeSymbol, _typeParameterArgumentMap: TypeArgumentMap, isInstanceReferenceType: boolean);
        public isGeneric(): boolean;
        public getTypeParameterArgumentMap(): TypeArgumentMap;
        public getTypeArguments(): PullTypeSymbol[];
        public getTypeArgumentsOrTypeParameters(): PullTypeSymbol[];
        private populateInstantiatedMemberFromReferencedMember(referencedMember);
        public getMembers(): PullSymbol[];
        public findMember(name: string, lookInParent?: boolean): PullSymbol;
        public getAllMembers(searchDeclKind: PullElementKind, memberVisiblity: GetAllMembersVisiblity): PullSymbol[];
        public getConstructorMethod(): PullSymbol;
        public getAssociatedContainerType(): PullTypeSymbol;
        public getCallSignatures(): PullSignatureSymbol[];
        public getConstructSignatures(): PullSignatureSymbol[];
        public getIndexSignatures(): PullSignatureSymbol[];
    }
    class PullInstantiatedSignatureSymbol extends PullSignatureSymbol {
        private _typeParameterArgumentMap;
        public getTypeParameterArgumentMap(): TypeArgumentMap;
        constructor(rootSignature: PullSignatureSymbol, _typeParameterArgumentMap: TypeArgumentMap);
        public getIsSpecialized(): boolean;
        public _getResolver(): PullTypeResolver;
        public getTypeParameters(): PullTypeParameterSymbol[];
        public getAllowedToReferenceTypeParameters(): PullTypeParameterSymbol[];
    }
    class PullInstantiatedTypeParameterSymbol extends PullTypeParameterSymbol {
        constructor(rootTypeParameter: PullTypeSymbol, constraintType: PullTypeSymbol);
        public _getResolver(): PullTypeResolver;
    }
}
declare module TypeScript {
    class SyntaxTreeToAstVisitor implements ISyntaxVisitor {
        private fileName;
        public lineMap: LineMap;
        private compilationSettings;
        public position: number;
        public previousTokenTrailingComments: Comment[];
        constructor(fileName: string, lineMap: LineMap, compilationSettings: ImmutableCompilationSettings);
        static visit(syntaxTree: SyntaxTree, fileName: string, compilationSettings: ImmutableCompilationSettings, incrementalAST: boolean): SourceUnit;
        public movePast(element: ISyntaxElement): void;
        private moveTo(element1, element2);
        private setCommentsAndSpan(ast, fullStart, node);
        public createTokenSpan(fullStart: number, element: ISyntaxToken): ASTSpan;
        public setSpan(span: AST, fullStart: number, element: ISyntaxElement, firstToken?: ISyntaxToken, lastToken?: ISyntaxToken): void;
        public setSpanExplicit(span: IASTSpan, start: number, end: number): void;
        public visitSyntaxList(node: ISyntaxList): ISyntaxList2;
        public visitSeparatedSyntaxList(list: ISeparatedSyntaxList): ISeparatedSyntaxList2;
        private convertComment(trivia, commentStartPosition, hasTrailingNewLine);
        private convertComments(triviaList, commentStartPosition);
        private mergeComments(comments1, comments2);
        private convertTokenLeadingComments(token, commentStartPosition);
        private convertTokenTrailingComments(token, commentStartPosition);
        private convertNodeTrailingComments(node, lastToken, nodeStart);
        private visitIdentifier(token);
        public visitToken(token: ISyntaxToken): IASTToken;
        public visitTokenWorker(token: ISyntaxToken): IASTToken;
        public visitSourceUnit(node: SourceUnitSyntax): SourceUnit;
        public visitExternalModuleReference(node: ExternalModuleReferenceSyntax): ExternalModuleReference;
        public visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): ModuleNameModuleReference;
        public visitClassDeclaration(node: ClassDeclarationSyntax): ClassDeclaration;
        private visitModifiers(modifiers);
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): InterfaceDeclaration;
        public visitHeritageClause(node: HeritageClauseSyntax): HeritageClause;
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): ModuleDeclaration;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): FunctionDeclaration;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): EnumDeclaration;
        public visitEnumElement(node: EnumElementSyntax): EnumElement;
        public visitImportDeclaration(node: ImportDeclarationSyntax): ImportDeclaration;
        public visitExportAssignment(node: ExportAssignmentSyntax): ExportAssignment;
        public visitVariableStatement(node: VariableStatementSyntax): VariableStatement;
        public visitVariableDeclaration(node: VariableDeclarationSyntax): VariableDeclaration;
        public visitVariableDeclarator(node: VariableDeclaratorSyntax): VariableDeclarator;
        public visitEqualsValueClause(node: EqualsValueClauseSyntax): EqualsValueClause;
        public visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): PrefixUnaryExpression;
        public visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): ArrayLiteralExpression;
        public visitOmittedExpression(node: OmittedExpressionSyntax): OmittedExpression;
        public visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): ParenthesizedExpression;
        public visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): SimpleArrowFunctionExpression;
        public visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): ParenthesizedArrowFunctionExpression;
        public visitType(type: ITypeSyntax): AST;
        public visitTypeQuery(node: TypeQuerySyntax): TypeQuery;
        public visitQualifiedName(node: QualifiedNameSyntax): QualifiedName;
        public visitTypeArgumentList(node: TypeArgumentListSyntax): TypeArgumentList;
        public visitConstructorType(node: ConstructorTypeSyntax): ConstructorType;
        public visitFunctionType(node: FunctionTypeSyntax): FunctionType;
        public visitObjectType(node: ObjectTypeSyntax): ObjectType;
        public visitArrayType(node: ArrayTypeSyntax): ArrayType;
        public visitGenericType(node: GenericTypeSyntax): GenericType;
        public visitTypeAnnotation(node: TypeAnnotationSyntax): TypeAnnotation;
        public visitBlock(node: BlockSyntax): Block;
        public visitParameter(node: ParameterSyntax): Parameter;
        public visitMemberAccessExpression(node: MemberAccessExpressionSyntax): MemberAccessExpression;
        public visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): PostfixUnaryExpression;
        public visitElementAccessExpression(node: ElementAccessExpressionSyntax): ElementAccessExpression;
        public visitInvocationExpression(node: InvocationExpressionSyntax): InvocationExpression;
        public visitArgumentList(node: ArgumentListSyntax): ArgumentList;
        public visitBinaryExpression(node: BinaryExpressionSyntax): BinaryExpression;
        public visitConditionalExpression(node: ConditionalExpressionSyntax): ConditionalExpression;
        public visitConstructSignature(node: ConstructSignatureSyntax): ConstructSignature;
        public visitMethodSignature(node: MethodSignatureSyntax): MethodSignature;
        public visitIndexSignature(node: IndexSignatureSyntax): IndexSignature;
        public visitPropertySignature(node: PropertySignatureSyntax): PropertySignature;
        public visitParameterList(node: ParameterListSyntax): ParameterList;
        public visitCallSignature(node: CallSignatureSyntax): CallSignature;
        public visitTypeParameterList(node: TypeParameterListSyntax): TypeParameterList;
        public visitTypeParameter(node: TypeParameterSyntax): TypeParameter;
        public visitConstraint(node: ConstraintSyntax): Constraint;
        public visitIfStatement(node: IfStatementSyntax): IfStatement;
        public visitElseClause(node: ElseClauseSyntax): ElseClause;
        public visitExpressionStatement(node: ExpressionStatementSyntax): ExpressionStatement;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): ConstructorDeclaration;
        public visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): IndexMemberDeclaration;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): MemberFunctionDeclaration;
        public visitGetAccessor(node: GetAccessorSyntax): GetAccessor;
        public visitSetAccessor(node: SetAccessorSyntax): SetAccessor;
        public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): MemberVariableDeclaration;
        public visitThrowStatement(node: ThrowStatementSyntax): ThrowStatement;
        public visitReturnStatement(node: ReturnStatementSyntax): ReturnStatement;
        public visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): ObjectCreationExpression;
        public visitSwitchStatement(node: SwitchStatementSyntax): SwitchStatement;
        public visitCaseSwitchClause(node: CaseSwitchClauseSyntax): CaseSwitchClause;
        public visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): DefaultSwitchClause;
        public visitBreakStatement(node: BreakStatementSyntax): BreakStatement;
        public visitContinueStatement(node: ContinueStatementSyntax): ContinueStatement;
        public visitForStatement(node: ForStatementSyntax): ForStatement;
        public visitForInStatement(node: ForInStatementSyntax): ForInStatement;
        public visitWhileStatement(node: WhileStatementSyntax): WhileStatement;
        public visitWithStatement(node: WithStatementSyntax): WithStatement;
        public visitCastExpression(node: CastExpressionSyntax): CastExpression;
        public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): ObjectLiteralExpression;
        public visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): SimplePropertyAssignment;
        public visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): FunctionPropertyAssignment;
        public visitFunctionExpression(node: FunctionExpressionSyntax): FunctionExpression;
        public visitEmptyStatement(node: EmptyStatementSyntax): EmptyStatement;
        public visitTryStatement(node: TryStatementSyntax): TryStatement;
        public visitCatchClause(node: CatchClauseSyntax): CatchClause;
        public visitFinallyClause(node: FinallyClauseSyntax): FinallyClause;
        public visitLabeledStatement(node: LabeledStatementSyntax): LabeledStatement;
        public visitDoStatement(node: DoStatementSyntax): DoStatement;
        public visitTypeOfExpression(node: TypeOfExpressionSyntax): TypeOfExpression;
        public visitDeleteExpression(node: DeleteExpressionSyntax): DeleteExpression;
        public visitVoidExpression(node: VoidExpressionSyntax): VoidExpression;
        public visitDebuggerStatement(node: DebuggerStatementSyntax): DebuggerStatement;
    }
}
declare module TypeScript {
    interface IASTSpan {
        _start: number;
        _end: number;
        start(): number;
        end(): number;
    }
    class ASTSpan implements IASTSpan {
        public _start: number;
        public _end: number;
        constructor(_start: number, _end: number);
        public start(): number;
        public end(): number;
    }
    function structuralEqualsNotIncludingPosition(ast1: AST, ast2: AST): boolean;
    function structuralEqualsIncludingPosition(ast1: AST, ast2: AST): boolean;
    class AST implements IASTSpan {
        public parent: AST;
        public _start: number;
        public _end: number;
        public _trailingTriviaWidth: number;
        private _astID;
        private _preComments;
        private _postComments;
        constructor();
        public syntaxID(): number;
        public start(): number;
        public end(): number;
        public trailingTriviaWidth(): number;
        public fileName(): string;
        public kind(): SyntaxKind;
        public preComments(): Comment[];
        public postComments(): Comment[];
        public setPreComments(comments: Comment[]): void;
        public setPostComments(comments: Comment[]): void;
        public width(): number;
        public structuralEquals(ast: AST, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    interface IASTToken extends AST {
        text(): string;
        valueText(): string;
    }
    class ISyntaxList2 extends AST {
        private _fileName;
        private members;
        constructor(_fileName: string, members: AST[]);
        public childCount(): number;
        public childAt(index: number): AST;
        public fileName(): string;
        public kind(): SyntaxKind;
        public firstOrDefault(func: (v: AST, index: number) => boolean): AST;
        public lastOrDefault(func: (v: AST, index: number) => boolean): AST;
        public any(func: (v: AST) => boolean): boolean;
        public structuralEquals(ast: ISyntaxList2, includingPosition: boolean): boolean;
    }
    class ISeparatedSyntaxList2 extends AST {
        private _fileName;
        private members;
        private _separatorCount;
        constructor(_fileName: string, members: AST[], _separatorCount: number);
        public nonSeparatorCount(): number;
        public separatorCount(): number;
        public nonSeparatorAt(index: number): AST;
        public nonSeparatorIndexOf(ast: AST): number;
        public fileName(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: ISeparatedSyntaxList2, includingPosition: boolean): boolean;
    }
    class SourceUnit extends AST {
        public moduleElements: ISyntaxList2;
        public endOfFileTokenLeadingComments: Comment[];
        private _fileName;
        constructor(moduleElements: ISyntaxList2, endOfFileTokenLeadingComments: Comment[], _fileName: string);
        public fileName(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: SourceUnit, includingPosition: boolean): boolean;
    }
    class Identifier extends AST implements IASTToken {
        private _text;
        private _valueText;
        constructor(_text: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: Identifier, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class LiteralExpression extends AST {
        private _nodeType;
        private _text;
        private _valueText;
        constructor(_nodeType: SyntaxKind, _text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ThisExpression extends AST implements IASTToken {
        private _text;
        private _valueText;
        constructor(_text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class SuperExpression extends AST implements IASTToken {
        private _text;
        private _valueText;
        constructor(_text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class NumericLiteral extends AST implements IASTToken {
        private _value;
        private _text;
        private _valueText;
        constructor(_value: number, _text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public value(): any;
        public kind(): SyntaxKind;
        public structuralEquals(ast: NumericLiteral, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class RegularExpressionLiteral extends AST implements IASTToken {
        private _text;
        private _valueText;
        constructor(_text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public isExpression(): boolean;
    }
    class StringLiteral extends AST implements IASTToken {
        private _text;
        private _valueText;
        constructor(_text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: StringLiteral, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class TypeAnnotation extends AST {
        public type: AST;
        constructor(type: AST);
        public kind(): SyntaxKind;
    }
    class BuiltInType extends AST implements IASTToken {
        private _nodeType;
        private _text;
        private _valueText;
        constructor(_nodeType: SyntaxKind, _text: string, _valueText: string);
        public text(): string;
        public valueText(): string;
        public kind(): SyntaxKind;
    }
    class ExternalModuleReference extends AST {
        public stringLiteral: StringLiteral;
        constructor(stringLiteral: StringLiteral);
        public kind(): SyntaxKind;
    }
    class ModuleNameModuleReference extends AST {
        public moduleName: AST;
        constructor(moduleName: AST);
        public kind(): SyntaxKind;
    }
    class ImportDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public moduleReference: AST;
        constructor(modifiers: PullElementFlags[], identifier: Identifier, moduleReference: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ImportDeclaration, includingPosition: boolean): boolean;
    }
    class ExportAssignment extends AST {
        public identifier: Identifier;
        constructor(identifier: Identifier);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ExportAssignment, includingPosition: boolean): boolean;
    }
    class TypeParameterList extends AST {
        public typeParameters: ISeparatedSyntaxList2;
        constructor(typeParameters: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
    }
    class ClassDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public typeParameterList: TypeParameterList;
        public heritageClauses: ISyntaxList2;
        public classElements: ISyntaxList2;
        public closeBraceToken: ASTSpan;
        constructor(modifiers: PullElementFlags[], identifier: Identifier, typeParameterList: TypeParameterList, heritageClauses: ISyntaxList2, classElements: ISyntaxList2, closeBraceToken: ASTSpan);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ClassDeclaration, includingPosition: boolean): boolean;
    }
    class InterfaceDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public typeParameterList: TypeParameterList;
        public heritageClauses: ISyntaxList2;
        public body: ObjectType;
        constructor(modifiers: PullElementFlags[], identifier: Identifier, typeParameterList: TypeParameterList, heritageClauses: ISyntaxList2, body: ObjectType);
        public kind(): SyntaxKind;
        public structuralEquals(ast: InterfaceDeclaration, includingPosition: boolean): boolean;
    }
    class HeritageClause extends AST {
        private _nodeType;
        public typeNames: ISeparatedSyntaxList2;
        constructor(_nodeType: SyntaxKind, typeNames: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: HeritageClause, includingPosition: boolean): boolean;
    }
    class ModuleDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public name: AST;
        public stringLiteral: StringLiteral;
        public moduleElements: ISyntaxList2;
        public endingToken: ASTSpan;
        constructor(modifiers: PullElementFlags[], name: AST, stringLiteral: StringLiteral, moduleElements: ISyntaxList2, endingToken: ASTSpan);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ModuleDeclaration, includingPosition: boolean): boolean;
    }
    class FunctionDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public callSignature: CallSignature;
        public block: Block;
        constructor(modifiers: PullElementFlags[], identifier: Identifier, callSignature: CallSignature, block: Block);
        public kind(): SyntaxKind;
        public structuralEquals(ast: FunctionDeclaration, includingPosition: boolean): boolean;
    }
    class VariableStatement extends AST {
        public modifiers: PullElementFlags[];
        public declaration: VariableDeclaration;
        constructor(modifiers: PullElementFlags[], declaration: VariableDeclaration);
        public kind(): SyntaxKind;
        public structuralEquals(ast: VariableStatement, includingPosition: boolean): boolean;
    }
    class VariableDeclaration extends AST {
        public declarators: ISeparatedSyntaxList2;
        constructor(declarators: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: VariableDeclaration, includingPosition: boolean): boolean;
    }
    class VariableDeclarator extends AST {
        public propertyName: IASTToken;
        public typeAnnotation: TypeAnnotation;
        public equalsValueClause: EqualsValueClause;
        constructor(propertyName: IASTToken, typeAnnotation: TypeAnnotation, equalsValueClause: EqualsValueClause);
        public kind(): SyntaxKind;
    }
    class EqualsValueClause extends AST {
        public value: AST;
        constructor(value: AST);
        public kind(): SyntaxKind;
    }
    class PrefixUnaryExpression extends AST {
        private _nodeType;
        public operand: AST;
        constructor(_nodeType: SyntaxKind, operand: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: PrefixUnaryExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ArrayLiteralExpression extends AST {
        public expressions: ISeparatedSyntaxList2;
        constructor(expressions: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ArrayLiteralExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class OmittedExpression extends AST {
        public kind(): SyntaxKind;
        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ParenthesizedExpression extends AST {
        public openParenTrailingComments: Comment[];
        public expression: AST;
        constructor(openParenTrailingComments: Comment[], expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    interface ICallExpression extends IASTSpan {
        expression: AST;
        argumentList: ArgumentList;
    }
    class SimpleArrowFunctionExpression extends AST {
        public identifier: Identifier;
        public block: Block;
        public expression: AST;
        constructor(identifier: Identifier, block: Block, expression: AST);
        public kind(): SyntaxKind;
        public isExpression(): boolean;
    }
    class ParenthesizedArrowFunctionExpression extends AST {
        public callSignature: CallSignature;
        public block: Block;
        public expression: AST;
        constructor(callSignature: CallSignature, block: Block, expression: AST);
        public kind(): SyntaxKind;
        public isExpression(): boolean;
    }
    class QualifiedName extends AST {
        public left: AST;
        public right: Identifier;
        constructor(left: AST, right: Identifier);
        public kind(): SyntaxKind;
        public structuralEquals(ast: QualifiedName, includingPosition: boolean): boolean;
    }
    class ParameterList extends AST {
        public openParenTrailingComments: Comment[];
        public parameters: ISeparatedSyntaxList2;
        constructor(openParenTrailingComments: Comment[], parameters: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
    }
    class ConstructorType extends AST {
        public typeParameterList: TypeParameterList;
        public parameterList: ParameterList;
        public type: AST;
        constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, type: AST);
        public kind(): SyntaxKind;
    }
    class FunctionType extends AST {
        public typeParameterList: TypeParameterList;
        public parameterList: ParameterList;
        public type: AST;
        constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, type: AST);
        public kind(): SyntaxKind;
    }
    class ObjectType extends AST {
        public typeMembers: ISeparatedSyntaxList2;
        constructor(typeMembers: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ObjectType, includingPosition: boolean): boolean;
    }
    class ArrayType extends AST {
        public type: AST;
        constructor(type: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ArrayType, includingPosition: boolean): boolean;
    }
    class TypeArgumentList extends AST {
        public typeArguments: ISeparatedSyntaxList2;
        constructor(typeArguments: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
    }
    class GenericType extends AST {
        public name: AST;
        public typeArgumentList: TypeArgumentList;
        constructor(name: AST, typeArgumentList: TypeArgumentList);
        public kind(): SyntaxKind;
        public structuralEquals(ast: GenericType, includingPosition: boolean): boolean;
    }
    class TypeQuery extends AST {
        public name: AST;
        constructor(name: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: TypeQuery, includingPosition: boolean): boolean;
    }
    class Block extends AST {
        public statements: ISyntaxList2;
        public closeBraceLeadingComments: Comment[];
        public closeBraceToken: IASTSpan;
        constructor(statements: ISyntaxList2, closeBraceLeadingComments: Comment[], closeBraceToken: IASTSpan);
        public kind(): SyntaxKind;
        public structuralEquals(ast: Block, includingPosition: boolean): boolean;
    }
    class Parameter extends AST {
        public dotDotDotToken: ASTSpan;
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public questionToken: ASTSpan;
        public typeAnnotation: TypeAnnotation;
        public equalsValueClause: EqualsValueClause;
        constructor(dotDotDotToken: ASTSpan, modifiers: PullElementFlags[], identifier: Identifier, questionToken: ASTSpan, typeAnnotation: TypeAnnotation, equalsValueClause: EqualsValueClause);
        public kind(): SyntaxKind;
    }
    class MemberAccessExpression extends AST {
        public expression: AST;
        public name: Identifier;
        constructor(expression: AST, name: Identifier);
        public kind(): SyntaxKind;
        public structuralEquals(ast: MemberAccessExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class PostfixUnaryExpression extends AST {
        private _nodeType;
        public operand: AST;
        constructor(_nodeType: SyntaxKind, operand: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: PostfixUnaryExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ElementAccessExpression extends AST {
        public expression: AST;
        public argumentExpression: AST;
        constructor(expression: AST, argumentExpression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ElementAccessExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class InvocationExpression extends AST implements ICallExpression {
        public expression: AST;
        public argumentList: ArgumentList;
        constructor(expression: AST, argumentList: ArgumentList);
        public kind(): SyntaxKind;
        public structuralEquals(ast: InvocationExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ArgumentList extends AST {
        public typeArgumentList: TypeArgumentList;
        public closeParenToken: ASTSpan;
        public arguments: ISeparatedSyntaxList2;
        constructor(typeArgumentList: TypeArgumentList, _arguments: ISeparatedSyntaxList2, closeParenToken: ASTSpan);
        public kind(): SyntaxKind;
    }
    class BinaryExpression extends AST {
        private _nodeType;
        public left: AST;
        public right: AST;
        constructor(_nodeType: SyntaxKind, left: AST, right: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: BinaryExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ConditionalExpression extends AST {
        public condition: AST;
        public whenTrue: AST;
        public whenFalse: AST;
        constructor(condition: AST, whenTrue: AST, whenFalse: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ConditionalExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ConstructSignature extends AST {
        public callSignature: CallSignature;
        constructor(callSignature: CallSignature);
        public kind(): SyntaxKind;
    }
    class MethodSignature extends AST {
        public propertyName: IASTToken;
        public questionToken: ASTSpan;
        public callSignature: CallSignature;
        constructor(propertyName: IASTToken, questionToken: ASTSpan, callSignature: CallSignature);
        public kind(): SyntaxKind;
    }
    class IndexSignature extends AST {
        public parameter: Parameter;
        public typeAnnotation: TypeAnnotation;
        constructor(parameter: Parameter, typeAnnotation: TypeAnnotation);
        public kind(): SyntaxKind;
    }
    class PropertySignature extends AST {
        public propertyName: IASTToken;
        public questionToken: ASTSpan;
        public typeAnnotation: TypeAnnotation;
        constructor(propertyName: IASTToken, questionToken: ASTSpan, typeAnnotation: TypeAnnotation);
        public kind(): SyntaxKind;
    }
    class CallSignature extends AST {
        public typeParameterList: TypeParameterList;
        public parameterList: ParameterList;
        public typeAnnotation: TypeAnnotation;
        constructor(typeParameterList: TypeParameterList, parameterList: ParameterList, typeAnnotation: TypeAnnotation);
        public kind(): SyntaxKind;
    }
    class TypeParameter extends AST {
        public identifier: Identifier;
        public constraint: Constraint;
        constructor(identifier: Identifier, constraint: Constraint);
        public kind(): SyntaxKind;
        public structuralEquals(ast: TypeParameter, includingPosition: boolean): boolean;
    }
    class Constraint extends AST {
        public type: AST;
        constructor(type: AST);
        public kind(): SyntaxKind;
    }
    class ElseClause extends AST {
        public statement: AST;
        constructor(statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ElseClause, includingPosition: boolean): boolean;
    }
    class IfStatement extends AST {
        public condition: AST;
        public statement: AST;
        public elseClause: ElseClause;
        constructor(condition: AST, statement: AST, elseClause: ElseClause);
        public kind(): SyntaxKind;
        public structuralEquals(ast: IfStatement, includingPosition: boolean): boolean;
    }
    class ExpressionStatement extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ExpressionStatement, includingPosition: boolean): boolean;
    }
    class ConstructorDeclaration extends AST {
        public callSignature: CallSignature;
        public block: Block;
        constructor(callSignature: CallSignature, block: Block);
        public kind(): SyntaxKind;
    }
    class MemberFunctionDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public propertyName: IASTToken;
        public callSignature: CallSignature;
        public block: Block;
        constructor(modifiers: PullElementFlags[], propertyName: IASTToken, callSignature: CallSignature, block: Block);
        public kind(): SyntaxKind;
    }
    class GetAccessor extends AST {
        public modifiers: PullElementFlags[];
        public propertyName: IASTToken;
        public parameterList: ParameterList;
        public typeAnnotation: TypeAnnotation;
        public block: Block;
        constructor(modifiers: PullElementFlags[], propertyName: IASTToken, parameterList: ParameterList, typeAnnotation: TypeAnnotation, block: Block);
        public kind(): SyntaxKind;
    }
    class SetAccessor extends AST {
        public modifiers: PullElementFlags[];
        public propertyName: IASTToken;
        public parameterList: ParameterList;
        public block: Block;
        constructor(modifiers: PullElementFlags[], propertyName: IASTToken, parameterList: ParameterList, block: Block);
        public kind(): SyntaxKind;
    }
    class MemberVariableDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public variableDeclarator: VariableDeclarator;
        constructor(modifiers: PullElementFlags[], variableDeclarator: VariableDeclarator);
        public kind(): SyntaxKind;
    }
    class IndexMemberDeclaration extends AST {
        public indexSignature: IndexSignature;
        constructor(indexSignature: IndexSignature);
        public kind(): SyntaxKind;
    }
    class ThrowStatement extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ThrowStatement, includingPosition: boolean): boolean;
    }
    class ReturnStatement extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ReturnStatement, includingPosition: boolean): boolean;
    }
    class ObjectCreationExpression extends AST implements ICallExpression {
        public expression: AST;
        public argumentList: ArgumentList;
        constructor(expression: AST, argumentList: ArgumentList);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ObjectCreationExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class SwitchStatement extends AST {
        public expression: AST;
        public closeParenToken: ASTSpan;
        public switchClauses: ISyntaxList2;
        constructor(expression: AST, closeParenToken: ASTSpan, switchClauses: ISyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: SwitchStatement, includingPosition: boolean): boolean;
    }
    class CaseSwitchClause extends AST {
        public expression: AST;
        public statements: ISyntaxList2;
        constructor(expression: AST, statements: ISyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: CaseSwitchClause, includingPosition: boolean): boolean;
    }
    class DefaultSwitchClause extends AST {
        public statements: ISyntaxList2;
        constructor(statements: ISyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: DefaultSwitchClause, includingPosition: boolean): boolean;
    }
    class BreakStatement extends AST {
        public identifier: Identifier;
        constructor(identifier: Identifier);
        public kind(): SyntaxKind;
        public structuralEquals(ast: BreakStatement, includingPosition: boolean): boolean;
    }
    class ContinueStatement extends AST {
        public identifier: Identifier;
        constructor(identifier: Identifier);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ContinueStatement, includingPosition: boolean): boolean;
    }
    class ForStatement extends AST {
        public variableDeclaration: VariableDeclaration;
        public initializer: AST;
        public condition: AST;
        public incrementor: AST;
        public statement: AST;
        constructor(variableDeclaration: VariableDeclaration, initializer: AST, condition: AST, incrementor: AST, statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ForStatement, includingPosition: boolean): boolean;
    }
    class ForInStatement extends AST {
        public variableDeclaration: VariableDeclaration;
        public left: AST;
        public expression: AST;
        public statement: AST;
        constructor(variableDeclaration: VariableDeclaration, left: AST, expression: AST, statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ForInStatement, includingPosition: boolean): boolean;
    }
    class WhileStatement extends AST {
        public condition: AST;
        public statement: AST;
        constructor(condition: AST, statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: WhileStatement, includingPosition: boolean): boolean;
    }
    class WithStatement extends AST {
        public condition: AST;
        public statement: AST;
        constructor(condition: AST, statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: WithStatement, includingPosition: boolean): boolean;
    }
    class EnumDeclaration extends AST {
        public modifiers: PullElementFlags[];
        public identifier: Identifier;
        public enumElements: ISeparatedSyntaxList2;
        constructor(modifiers: PullElementFlags[], identifier: Identifier, enumElements: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
    }
    class EnumElement extends AST {
        public propertyName: IASTToken;
        public equalsValueClause: EqualsValueClause;
        constructor(propertyName: IASTToken, equalsValueClause: EqualsValueClause);
        public kind(): SyntaxKind;
    }
    class CastExpression extends AST {
        public type: AST;
        public expression: AST;
        constructor(type: AST, expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: CastExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class ObjectLiteralExpression extends AST {
        public propertyAssignments: ISeparatedSyntaxList2;
        constructor(propertyAssignments: ISeparatedSyntaxList2);
        public kind(): SyntaxKind;
        public structuralEquals(ast: ObjectLiteralExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class SimplePropertyAssignment extends AST {
        public propertyName: Identifier;
        public expression: AST;
        constructor(propertyName: Identifier, expression: AST);
        public kind(): SyntaxKind;
    }
    class FunctionPropertyAssignment extends AST {
        public propertyName: Identifier;
        public callSignature: CallSignature;
        public block: Block;
        constructor(propertyName: Identifier, callSignature: CallSignature, block: Block);
        public kind(): SyntaxKind;
    }
    class FunctionExpression extends AST {
        public identifier: Identifier;
        public callSignature: CallSignature;
        public block: Block;
        constructor(identifier: Identifier, callSignature: CallSignature, block: Block);
        public kind(): SyntaxKind;
        public isExpression(): boolean;
    }
    class EmptyStatement extends AST {
        public kind(): SyntaxKind;
        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
    }
    class TryStatement extends AST {
        public block: Block;
        public catchClause: CatchClause;
        public finallyClause: FinallyClause;
        constructor(block: Block, catchClause: CatchClause, finallyClause: FinallyClause);
        public kind(): SyntaxKind;
        public structuralEquals(ast: TryStatement, includingPosition: boolean): boolean;
    }
    class CatchClause extends AST {
        public identifier: Identifier;
        public typeAnnotation: TypeAnnotation;
        public block: Block;
        constructor(identifier: Identifier, typeAnnotation: TypeAnnotation, block: Block);
        public kind(): SyntaxKind;
        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
    }
    class FinallyClause extends AST {
        public block: Block;
        constructor(block: Block);
        public kind(): SyntaxKind;
        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean;
    }
    class LabeledStatement extends AST {
        public identifier: Identifier;
        public statement: AST;
        constructor(identifier: Identifier, statement: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: LabeledStatement, includingPosition: boolean): boolean;
    }
    class DoStatement extends AST {
        public statement: AST;
        public whileKeyword: ASTSpan;
        public condition: AST;
        constructor(statement: AST, whileKeyword: ASTSpan, condition: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: DoStatement, includingPosition: boolean): boolean;
    }
    class TypeOfExpression extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: TypeOfExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class DeleteExpression extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: DeleteExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class VoidExpression extends AST {
        public expression: AST;
        constructor(expression: AST);
        public kind(): SyntaxKind;
        public structuralEquals(ast: VoidExpression, includingPosition: boolean): boolean;
        public isExpression(): boolean;
    }
    class DebuggerStatement extends AST {
        public kind(): SyntaxKind;
    }
    class Comment {
        private _trivia;
        public endsLine: boolean;
        public _start: number;
        public _end: number;
        constructor(_trivia: ISyntaxTrivia, endsLine: boolean, _start: number, _end: number);
        public start(): number;
        public end(): number;
        public fullText(): string;
        public kind(): SyntaxKind;
        public structuralEquals(ast: Comment, includingPosition: boolean): boolean;
    }
}
declare module TypeScript.Services {
    enum EndOfLineState {
        Start = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    class Classifier {
        public host: IClassifierHost;
        private scanner;
        private characterWindow;
        private diagnostics;
        constructor(host: IClassifierHost);
        public getClassificationsForLine(text: string, lexState: EndOfLineState): ClassificationResult;
        private processToken(text, offset, token, result);
        private processTriviaList(text, offset, triviaList, result);
        private addResult(text, offset, result, length, kind);
        private classFromKind(kind);
    }
    interface IClassifierHost extends ILogger {
    }
    class ClassificationResult {
        public finalLexState: EndOfLineState;
        public entries: ClassificationInfo[];
        constructor();
    }
    class ClassificationInfo {
        public length: number;
        public classification: TokenClass;
        constructor(length: number, classification: TokenClass);
    }
}
declare module TypeScript.Services {
    interface ILanguageServicesDiagnostics {
        log(content: string): void;
    }
}
declare module TypeScript.Services {
    interface ILanguageServiceHost extends ILogger, IReferenceResolverHost {
        getCompilationSettings(): CompilationSettings;
        getScriptFileNames(): string[];
        getScriptVersion(fileName: string): number;
        getScriptIsOpen(fileName: string): boolean;
        getScriptByteOrderMark(fileName: string): ByteOrderMark;
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        getDiagnosticsObject(): ILanguageServicesDiagnostics;
        getLocalizedDiagnosticMessages(): any;
    }
    interface ILanguageService {
        refresh(): void;
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        getTypeAtPosition(fileName: string, position: number): TypeInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): SpanInfo;
        getBreakpointStatementAtPosition(fileName: string, position: number): SpanInfo;
        getSignatureAtPosition(fileName: string, position: number): SignatureInfo;
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getImplementorsAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string): NavigateToItem[];
        getScriptLexicalStructure(fileName: string): NavigateToItem[];
        getOutliningRegions(fileName: string): TextSpan[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions): number;
        getFormattingEditsForRange(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        getFormattingEditsForDocument(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        getFormattingEditsOnPaste(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextEdit[];
        getEmitOutput(fileName: string): EmitOutput;
        getSyntaxTree(fileName: string): SyntaxTree;
    }
    function logInternalError(logger: ILogger, err: Error): void;
    class ReferenceEntry {
        public fileName: string;
        public minChar: number;
        public limChar: number;
        public isWriteAccess: boolean;
        constructor(fileName: string, minChar: number, limChar: number, isWriteAccess: boolean);
    }
    class NavigateToItem {
        public name: string;
        public kind: string;
        public kindModifiers: string;
        public matchKind: string;
        public fileName: string;
        public minChar: number;
        public limChar: number;
        public additionalSpans: SpanInfo[];
        public containerName: string;
        public containerKind: string;
    }
    class TextEdit {
        public minChar: number;
        public limChar: number;
        public text: string;
        constructor(minChar: number, limChar: number, text: string);
        static createInsert(pos: number, text: string): TextEdit;
        static createDelete(minChar: number, limChar: number): TextEdit;
        static createReplace(minChar: number, limChar: number, text: string): TextEdit;
    }
    class EditorOptions {
        public IndentSize: number;
        public TabSize: number;
        public NewLineCharacter: string;
        public ConvertTabsToSpaces: boolean;
        static clone(objectToClone: EditorOptions): EditorOptions;
    }
    class FormatCodeOptions extends EditorOptions {
        public InsertSpaceAfterCommaDelimiter: boolean;
        public InsertSpaceAfterSemicolonInForStatements: boolean;
        public InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        public InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        public InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        public InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        public PlaceOpenBraceOnNewLineForFunctions: boolean;
        public PlaceOpenBraceOnNewLineForControlBlocks: boolean;
        static clone(objectToClone: FormatCodeOptions): FormatCodeOptions;
    }
    class DefinitionInfo {
        public fileName: string;
        public minChar: number;
        public limChar: number;
        public kind: string;
        public name: string;
        public containerKind: string;
        public containerName: string;
        constructor(fileName: string, minChar: number, limChar: number, kind: string, name: string, containerKind: string, containerName: string);
    }
    class TypeInfo {
        public memberName: MemberName;
        public docComment: string;
        public fullSymbolName: string;
        public kind: string;
        public minChar: number;
        public limChar: number;
        constructor(memberName: MemberName, docComment: string, fullSymbolName: string, kind: string, minChar: number, limChar: number);
    }
    class SpanInfo {
        public minChar: number;
        public limChar: number;
        public text: string;
        constructor(minChar: number, limChar: number, text?: string);
    }
    class SignatureInfo {
        public actual: ActualSignatureInfo;
        public formal: FormalSignatureItemInfo[];
        public activeFormal: number;
    }
    class FormalSignatureItemInfo {
        public signatureInfo: string;
        public typeParameters: FormalTypeParameterInfo[];
        public parameters: FormalParameterInfo[];
        public docComment: string;
    }
    class FormalTypeParameterInfo {
        public name: string;
        public docComment: string;
        public minChar: number;
        public limChar: number;
    }
    class FormalParameterInfo {
        public name: string;
        public isVariable: boolean;
        public docComment: string;
        public minChar: number;
        public limChar: number;
    }
    class ActualSignatureInfo {
        public parameterMinChar: number;
        public parameterLimChar: number;
        public currentParameterIsTypeParameter: boolean;
        public currentParameter: number;
    }
    class CompletionInfo {
        public maybeInaccurate: boolean;
        public isMemberCompletion: boolean;
        public entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: string;
        kindModifiers: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: string;
        kindModifiers: string;
        type: string;
        fullSymbolName: string;
        docComment: string;
    }
    class ScriptElementKind {
        static unknown: string;
        static keyword: string;
        static scriptElement: string;
        static moduleElement: string;
        static classElement: string;
        static interfaceElement: string;
        static enumElement: string;
        static variableElement: string;
        static localVariableElement: string;
        static functionElement: string;
        static localFunctionElement: string;
        static memberFunctionElement: string;
        static memberGetAccessorElement: string;
        static memberSetAccessorElement: string;
        static memberVariableElement: string;
        static constructorImplementationElement: string;
        static callSignatureElement: string;
        static indexSignatureElement: string;
        static constructSignatureElement: string;
        static parameterElement: string;
        static typeParameterElement: string;
        static primitiveType: string;
    }
    class ScriptElementKindModifier {
        static none: string;
        static publicMemberModifier: string;
        static privateMemberModifier: string;
        static exportedModifier: string;
        static ambientModifier: string;
        static staticModifier: string;
    }
    class MatchKind {
        static none: string;
        static exact: string;
        static subString: string;
        static prefix: string;
    }
    class DiagnosticCategory {
        static none: string;
        static error: string;
        static warning: string;
        static message: string;
    }
}
declare module TypeScript.Services.Formatting {
    interface ITextSnapshot {
        getText(span: TextSpan): string;
        getLineNumberFromPosition(position: number): number;
        getLineFromPosition(position: number): ITextSnapshotLine;
        getLineFromLineNumber(lineNumber: number): ITextSnapshotLine;
    }
    class TextSnapshot implements ITextSnapshot {
        private snapshot;
        private lines;
        constructor(snapshot: ISimpleText);
        public getText(span: TextSpan): string;
        public getLineNumberFromPosition(position: number): number;
        public getLineFromPosition(position: number): ITextSnapshotLine;
        public getLineFromLineNumber(lineNumber: number): ITextSnapshotLine;
        private getLineFromLineNumberWorker(lineNumber);
    }
}
declare module TypeScript.Services.Formatting {
    interface ITextSnapshotLine {
        snapshot(): ITextSnapshot;
        start(): SnapshotPoint;
        startPosition(): number;
        end(): SnapshotPoint;
        endPosition(): number;
        endIncludingLineBreak(): SnapshotPoint;
        endIncludingLineBreakPosition(): number;
        length(): number;
        lineNumber(): number;
        getText(): string;
    }
    class TextSnapshotLine implements ITextSnapshotLine {
        private _snapshot;
        private _lineNumber;
        private _start;
        private _end;
        private _lineBreak;
        constructor(_snapshot: ITextSnapshot, _lineNumber: number, _start: number, _end: number, _lineBreak: string);
        public snapshot(): ITextSnapshot;
        public start(): SnapshotPoint;
        public startPosition(): number;
        public end(): SnapshotPoint;
        public endPosition(): number;
        public endIncludingLineBreak(): SnapshotPoint;
        public endIncludingLineBreakPosition(): number;
        public length(): number;
        public lineNumber(): number;
        public getText(): string;
    }
}
declare module TypeScript.Services.Formatting {
    class SnapshotPoint {
        public snapshot: ITextSnapshot;
        public position: number;
        constructor(snapshot: ITextSnapshot, position: number);
        public getContainingLine(): ITextSnapshotLine;
        public add(offset: number): SnapshotPoint;
    }
}
declare module TypeScript.Services.Formatting {
    class FormattingContext {
        private snapshot;
        public formattingRequestKind: FormattingRequestKind;
        public currentTokenSpan: TokenSpan;
        public nextTokenSpan: TokenSpan;
        public contextNode: IndentationNodeContext;
        public currentTokenParent: IndentationNodeContext;
        public nextTokenParent: IndentationNodeContext;
        private contextNodeAllOnSameLine;
        private nextNodeAllOnSameLine;
        private tokensAreOnSameLine;
        private contextNodeBlockIsOnOneLine;
        private nextNodeBlockIsOnOneLine;
        constructor(snapshot: ITextSnapshot, formattingRequestKind: FormattingRequestKind);
        public updateContext(currentTokenSpan: TokenSpan, currentTokenParent: IndentationNodeContext, nextTokenSpan: TokenSpan, nextTokenParent: IndentationNodeContext, commonParent: IndentationNodeContext): void;
        public ContextNodeAllOnSameLine(): boolean;
        public NextNodeAllOnSameLine(): boolean;
        public TokensAreOnSameLine(): boolean;
        public ContextNodeBlockIsOnOneLine(): boolean;
        public NextNodeBlockIsOnOneLine(): boolean;
        public NodeIsOnOneLine(node: IndentationNodeContext): boolean;
        public BlockIsOnOneLine(node: IndentationNodeContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class FormattingManager {
        private syntaxTree;
        private snapshot;
        private rulesProvider;
        private options;
        constructor(syntaxTree: SyntaxTree, snapshot: ITextSnapshot, rulesProvider: RulesProvider, editorOptions: EditorOptions);
        public formatSelection(minChar: number, limChar: number): TextEdit[];
        public formatDocument(minChar: number, limChar: number): TextEdit[];
        public formatOnPaste(minChar: number, limChar: number): TextEdit[];
        public formatOnSemicolon(caretPosition: number): TextEdit[];
        public formatOnClosingCurlyBrace(caretPosition: number): TextEdit[];
        public formatOnEnter(caretPosition: number): TextEdit[];
        private formatSpan(span, formattingRequestKind);
    }
}
declare module TypeScript.Services.Formatting {
    enum FormattingRequestKind {
        FormatDocument = 0,
        FormatSelection = 1,
        FormatOnEnter = 2,
        FormatOnSemicolon = 3,
        FormatOnClosingCurlyBrace = 4,
        FormatOnPaste = 5,
    }
}
declare module TypeScript.Services.Formatting {
    class Rule {
        public Descriptor: RuleDescriptor;
        public Operation: RuleOperation;
        public Flag: RuleFlags;
        constructor(Descriptor: RuleDescriptor, Operation: RuleOperation, Flag?: RuleFlags);
        public toString(): string;
    }
}
declare module TypeScript.Services.Formatting {
    enum RuleAction {
        Ignore = 0,
        Space = 1,
        NewLine = 2,
        Delete = 3,
    }
}
declare module TypeScript.Services.Formatting {
    class RuleDescriptor {
        public LeftTokenRange: Shared.TokenRange;
        public RightTokenRange: Shared.TokenRange;
        constructor(LeftTokenRange: Shared.TokenRange, RightTokenRange: Shared.TokenRange);
        public toString(): string;
        static create1(left: SyntaxKind, right: SyntaxKind): RuleDescriptor;
        static create2(left: Shared.TokenRange, right: SyntaxKind): RuleDescriptor;
        static create3(left: SyntaxKind, right: Shared.TokenRange): RuleDescriptor;
        static create4(left: Shared.TokenRange, right: Shared.TokenRange): RuleDescriptor;
    }
}
declare module TypeScript.Services.Formatting {
    enum RuleFlags {
        None = 0,
        CanDeleteNewLines = 1,
    }
}
declare module TypeScript.Services.Formatting {
    class RuleOperation {
        public Context: RuleOperationContext;
        public Action: RuleAction;
        constructor();
        public toString(): string;
        static create1(action: RuleAction): RuleOperation;
        static create2(context: RuleOperationContext, action: RuleAction): RuleOperation;
    }
}
declare module TypeScript.Services.Formatting {
    class RuleOperationContext {
        private customContextChecks;
        constructor(...funcs: {
            (context: FormattingContext): boolean;
        }[]);
        static Any: RuleOperationContext;
        public IsAny(): boolean;
        public InContext(context: FormattingContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class Rules {
        public getRuleName(rule: Rule): any;
        [name: string]: any;
        public IgnoreBeforeComment: Rule;
        public IgnoreAfterLineComment: Rule;
        public NoSpaceBeforeSemicolon: Rule;
        public NoSpaceBeforeColon: Rule;
        public NoSpaceBeforeQMark: Rule;
        public SpaceAfterColon: Rule;
        public SpaceAfterQMark: Rule;
        public SpaceAfterSemicolon: Rule;
        public SpaceAfterCloseBrace: Rule;
        public SpaceBetweenCloseBraceAndElse: Rule;
        public SpaceBetweenCloseBraceAndWhile: Rule;
        public NoSpaceAfterCloseBrace: Rule;
        public NoSpaceBeforeDot: Rule;
        public NoSpaceAfterDot: Rule;
        public NoSpaceBeforeOpenBracket: Rule;
        public NoSpaceAfterOpenBracket: Rule;
        public NoSpaceBeforeCloseBracket: Rule;
        public NoSpaceAfterCloseBracket: Rule;
        public SpaceAfterOpenBrace: Rule;
        public SpaceBeforeCloseBrace: Rule;
        public NoSpaceBetweenEmptyBraceBrackets: Rule;
        public NewLineAfterOpenBraceInBlockContext: Rule;
        public NewLineBeforeCloseBraceInBlockContext: Rule;
        public NoSpaceAfterUnaryPrefixOperator: Rule;
        public NoSpaceAfterUnaryPreincrementOperator: Rule;
        public NoSpaceAfterUnaryPredecrementOperator: Rule;
        public NoSpaceBeforeUnaryPostincrementOperator: Rule;
        public NoSpaceBeforeUnaryPostdecrementOperator: Rule;
        public SpaceAfterPostincrementWhenFollowedByAdd: Rule;
        public SpaceAfterAddWhenFollowedByUnaryPlus: Rule;
        public SpaceAfterAddWhenFollowedByPreincrement: Rule;
        public SpaceAfterPostdecrementWhenFollowedBySubtract: Rule;
        public SpaceAfterSubtractWhenFollowedByUnaryMinus: Rule;
        public SpaceAfterSubtractWhenFollowedByPredecrement: Rule;
        public NoSpaceBeforeComma: Rule;
        public SpaceAfterCertainKeywords: Rule;
        public NoSpaceBeforeOpenParenInFuncCall: Rule;
        public SpaceAfterFunctionInFuncDecl: Rule;
        public NoSpaceBeforeOpenParenInFuncDecl: Rule;
        public SpaceAfterVoidOperator: Rule;
        public NoSpaceBetweenReturnAndSemicolon: Rule;
        public SpaceBetweenStatements: Rule;
        public SpaceAfterTryFinally: Rule;
        public SpaceAfterGetSetInMember: Rule;
        public SpaceBeforeBinaryKeywordOperator: Rule;
        public SpaceAfterBinaryKeywordOperator: Rule;
        public NoSpaceAfterConstructor: Rule;
        public NoSpaceAfterModuleImport: Rule;
        public SpaceAfterCertainTypeScriptKeywords: Rule;
        public SpaceBeforeCertainTypeScriptKeywords: Rule;
        public SpaceAfterModuleName: Rule;
        public SpaceAfterArrow: Rule;
        public NoSpaceAfterEllipsis: Rule;
        public NoSpaceAfterOptionalParameters: Rule;
        public NoSpaceBeforeOpenAngularBracket: Rule;
        public NoSpaceBetweenCloseParenAndAngularBracket: Rule;
        public NoSpaceAfterOpenAngularBracket: Rule;
        public NoSpaceBeforeCloseAngularBracket: Rule;
        public NoSpaceAfterCloseAngularBracket: Rule;
        public NoSpaceBetweenEmptyInterfaceBraceBrackets: Rule;
        public HighPriorityCommonRules: Rule[];
        public LowPriorityCommonRules: Rule[];
        public SpaceAfterComma: Rule;
        public NoSpaceAfterComma: Rule;
        public SpaceBeforeBinaryOperator: Rule;
        public SpaceAfterBinaryOperator: Rule;
        public NoSpaceBeforeBinaryOperator: Rule;
        public NoSpaceAfterBinaryOperator: Rule;
        public SpaceAfterKeywordInControl: Rule;
        public NoSpaceAfterKeywordInControl: Rule;
        public FunctionOpenBraceLeftTokenRange: Shared.TokenRange;
        public SpaceBeforeOpenBraceInFunction: Rule;
        public NewLineBeforeOpenBraceInFunction: Rule;
        public TypeScriptOpenBraceLeftTokenRange: Shared.TokenRange;
        public SpaceBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        public NewLineBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        public ControlOpenBraceLeftTokenRange: Shared.TokenRange;
        public SpaceBeforeOpenBraceInControl: Rule;
        public NewLineBeforeOpenBraceInControl: Rule;
        public SpaceAfterSemicolonInFor: Rule;
        public NoSpaceAfterSemicolonInFor: Rule;
        public SpaceAfterOpenParen: Rule;
        public SpaceBeforeCloseParen: Rule;
        public NoSpaceBetweenParens: Rule;
        public NoSpaceAfterOpenParen: Rule;
        public NoSpaceBeforeCloseParen: Rule;
        public SpaceAfterAnonymousFunctionKeyword: Rule;
        public NoSpaceAfterAnonymousFunctionKeyword: Rule;
        constructor();
        static IsForContext(context: FormattingContext): boolean;
        static IsNotForContext(context: FormattingContext): boolean;
        static IsBinaryOpContext(context: FormattingContext): boolean;
        static IsNotBinaryOpContext(context: FormattingContext): boolean;
        static IsSameLineTokenOrBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsMultilineBlockContext(context: FormattingContext): boolean;
        static IsSingleLineBlockContext(context: FormattingContext): boolean;
        static IsBlockContext(context: FormattingContext): boolean;
        static IsBeforeBlockContext(context: FormattingContext): boolean;
        static NodeIsBlockContext(node: IndentationNodeContext): boolean;
        static IsFunctionDeclContext(context: FormattingContext): boolean;
        static IsTypeScriptDeclWithBlockContext(context: FormattingContext): boolean;
        static NodeIsTypeScriptDeclWithBlockContext(node: IndentationNodeContext): boolean;
        static IsAfterCodeBlockContext(context: FormattingContext): boolean;
        static IsControlDeclContext(context: FormattingContext): boolean;
        static IsObjectContext(context: FormattingContext): boolean;
        static IsFunctionCallContext(context: FormattingContext): boolean;
        static IsNewContext(context: FormattingContext): boolean;
        static IsFunctionCallOrNewContext(context: FormattingContext): boolean;
        static IsSameLineTokenContext(context: FormattingContext): boolean;
        static IsNotFormatOnEnter(context: FormattingContext): boolean;
        static IsModuleDeclContext(context: FormattingContext): boolean;
        static IsObjectTypeContext(context: FormattingContext): boolean;
        static IsTypeArgumentOrParameter(tokenKind: SyntaxKind, parentKind: SyntaxKind): boolean;
        static IsTypeArgumentOrParameterContext(context: FormattingContext): boolean;
        static IsVoidOpContext(context: FormattingContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class RulesMap {
        public map: RulesBucket[];
        public mapRowLength: number;
        constructor();
        static create(rules: Rule[]): RulesMap;
        public Initialize(rules: Rule[]): RulesBucket[];
        public FillRules(rules: Rule[], rulesBucketConstructionStateList: RulesBucketConstructionState[]): void;
        private GetRuleBucketIndex(row, column);
        private FillRule(rule, rulesBucketConstructionStateList);
        public GetRule(context: FormattingContext): Rule;
    }
    enum RulesPosition {
        IgnoreRulesSpecific = 0,
        IgnoreRulesAny,
        ContextRulesSpecific,
        ContextRulesAny,
        NoContextRulesSpecific,
        NoContextRulesAny,
    }
    class RulesBucketConstructionState {
        private rulesInsertionIndexBitmap;
        constructor();
        public GetInsertionIndex(maskPosition: RulesPosition): number;
        public IncreaseInsertionIndex(maskPosition: RulesPosition): void;
    }
    class RulesBucket {
        private rules;
        constructor();
        public Rules(): Rule[];
        public AddRule(rule: Rule, specificTokens: boolean, constructionState: RulesBucketConstructionState[], rulesBucketIndex: number): void;
    }
}
declare module TypeScript.Services.Formatting {
    class RulesProvider {
        private logger;
        private globalRules;
        private options;
        private activeRules;
        private rulesMap;
        constructor(logger: ILogger);
        public getRuleName(rule: Rule): string;
        public getRuleByName(name: string): Rule;
        public getRulesMap(): RulesMap;
        public ensureUpToDate(options: FormatCodeOptions): void;
        private createActiveRules(options);
    }
}
declare module TypeScript.Services.Formatting {
    class TextEditInfo {
        public position: number;
        public length: number;
        public replaceWith: string;
        constructor(position: number, length: number, replaceWith: string);
        public toString(): string;
    }
}
declare module TypeScript.Services.Formatting {
    module Shared {
        interface ITokenAccess {
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenRangeAccess implements ITokenAccess {
            private tokens;
            constructor(from: SyntaxKind, to: SyntaxKind, except: SyntaxKind[]);
            public GetTokens(): SyntaxKind[];
            public Contains(token: SyntaxKind): boolean;
            public toString(): string;
        }
        class TokenValuesAccess implements ITokenAccess {
            private tokens;
            constructor(tks: SyntaxKind[]);
            public GetTokens(): SyntaxKind[];
            public Contains(token: SyntaxKind): boolean;
        }
        class TokenSingleValueAccess implements ITokenAccess {
            public token: SyntaxKind;
            constructor(token: SyntaxKind);
            public GetTokens(): SyntaxKind[];
            public Contains(tokenValue: SyntaxKind): boolean;
            public toString(): string;
        }
        class TokenAllAccess implements ITokenAccess {
            public GetTokens(): SyntaxKind[];
            public Contains(tokenValue: SyntaxKind): boolean;
            public toString(): string;
        }
        class TokenRange {
            public tokenAccess: ITokenAccess;
            constructor(tokenAccess: ITokenAccess);
            static FromToken(token: SyntaxKind): TokenRange;
            static FromTokens(tokens: SyntaxKind[]): TokenRange;
            static FromRange(f: SyntaxKind, to: SyntaxKind, except?: SyntaxKind[]): TokenRange;
            static AllTokens(): TokenRange;
            public GetTokens(): SyntaxKind[];
            public Contains(token: SyntaxKind): boolean;
            public toString(): string;
            static Any: TokenRange;
            static AnyIncludingMultilineComments: TokenRange;
            static Keywords: TokenRange;
            static Operators: TokenRange;
            static BinaryOperators: TokenRange;
            static BinaryKeywordOperators: TokenRange;
            static ReservedKeywords: TokenRange;
            static UnaryPrefixOperators: TokenRange;
            static UnaryPrefixExpressions: TokenRange;
            static UnaryPreincrementExpressions: TokenRange;
            static UnaryPostincrementExpressions: TokenRange;
            static UnaryPredecrementExpressions: TokenRange;
            static UnaryPostdecrementExpressions: TokenRange;
            static Comments: TokenRange;
            static TypeNames: TokenRange;
        }
    }
}
declare module TypeScript.Services.Formatting {
    class TokenSpan extends TextSpan {
        private _kind;
        constructor(kind: SyntaxKind, start: number, length: number);
        public kind(): SyntaxKind;
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationNodeContext {
        private _node;
        private _parent;
        private _fullStart;
        private _indentationAmount;
        private _childIndentationAmountDelta;
        private _depth;
        private _hasSkippedOrMissingTokenChild;
        constructor(parent: IndentationNodeContext, node: SyntaxNode, fullStart: number, indentationAmount: number, childIndentationAmountDelta: number);
        public parent(): IndentationNodeContext;
        public node(): SyntaxNode;
        public fullStart(): number;
        public fullWidth(): number;
        public start(): number;
        public end(): number;
        public indentationAmount(): number;
        public childIndentationAmountDelta(): number;
        public depth(): number;
        public kind(): SyntaxKind;
        public hasSkippedOrMissingTokenChild(): boolean;
        public clone(pool: IndentationNodeContextPool): IndentationNodeContext;
        public update(parent: IndentationNodeContext, node: SyntaxNode, fullStart: number, indentationAmount: number, childIndentationAmountDelta: number): void;
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationNodeContextPool {
        private nodes;
        public getNode(parent: IndentationNodeContext, node: SyntaxNode, fullStart: number, indentationLevel: number, childIndentationLevelDelta: number): IndentationNodeContext;
        public releaseNode(node: IndentationNodeContext, recursive?: boolean): void;
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationTrackingWalker extends SyntaxWalker {
        public options: FormattingOptions;
        private _position;
        private _parent;
        private _textSpan;
        private _snapshot;
        private _lastTriviaWasNewLine;
        private _indentationNodeContextPool;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, indentFirstToken: boolean, options: FormattingOptions);
        public position(): number;
        public parent(): IndentationNodeContext;
        public textSpan(): TextSpan;
        public snapshot(): ITextSnapshot;
        public indentationNodeContextPool(): IndentationNodeContextPool;
        public forceIndentNextToken(tokenStart: number): void;
        public forceSkipIndentingNextToken(tokenStart: number): void;
        public indentToken(token: ISyntaxToken, indentationAmount: number, commentIndentationAmount: number): void;
        public visitTokenInSpan(token: ISyntaxToken): void;
        public visitToken(token: ISyntaxToken): void;
        public visitNode(node: SyntaxNode): void;
        private getTokenIndentationAmount(token);
        private getCommentIndentationAmount(token);
        private getNodeIndentation(node, newLineInsertedByFormatting?);
        private shouldIndentBlockInParent(parent);
        private forceRecomputeIndentationOfParent(tokenStart, newLineAdded);
    }
}
declare module TypeScript.Services.Formatting {
    class MultipleTokenIndenter extends IndentationTrackingWalker {
        private _edits;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, indentFirstToken: boolean, options: FormattingOptions);
        public indentToken(token: ISyntaxToken, indentationAmount: number, commentIndentationAmount: number): void;
        public edits(): TextEditInfo[];
        public recordEdit(position: number, length: number, replaceWith: string): void;
        private recordIndentationEditsForToken(token, indentationString, commentIndentationString);
        private recordIndentationEditsForSingleLineOrSkippedText(trivia, fullStart, indentationString);
        private recordIndentationEditsForWhitespace(trivia, fullStart, indentationString);
        private recordIndentationEditsForMultiLineComment(trivia, fullStart, indentationString, leadingWhiteSpace, firstLineAlreadyIndented);
        private recordIndentationEditsForSegment(segment, fullStart, indentationColumns, whiteSpaceColumnsInFirstSegment);
    }
}
declare module TypeScript.Services.Formatting {
    class SingleTokenIndenter extends IndentationTrackingWalker {
        private indentationAmount;
        private indentationPosition;
        constructor(indentationPosition: number, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, indentFirstToken: boolean, options: FormattingOptions);
        static getIndentationAmount(position: number, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, options: FormattingOptions): number;
        public indentToken(token: ISyntaxToken, indentationAmount: number, commentIndentationAmount: number): void;
    }
}
declare module TypeScript.Services.Formatting {
    class Formatter extends MultipleTokenIndenter {
        private previousTokenSpan;
        private previousTokenParent;
        private scriptHasErrors;
        private rulesProvider;
        private formattingRequestKind;
        private formattingContext;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, indentFirstToken: boolean, options: FormattingOptions, snapshot: ITextSnapshot, rulesProvider: RulesProvider, formattingRequestKind: FormattingRequestKind);
        static getEdits(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, options: FormattingOptions, indentFirstToken: boolean, snapshot: ITextSnapshot, rulesProvider: RulesProvider, formattingRequestKind: FormattingRequestKind): TextEditInfo[];
        public visitTokenInSpan(token: ISyntaxToken): void;
        private processToken(token);
        private processTrivia(triviaList, fullStart);
        private findCommonParents(parent1, parent2);
        private formatPair(t1, t1Parent, t2, t2Parent);
        private getLineNumber(span);
        private trimWhitespaceInLineRange(startLine, endLine, token?);
        private trimWhitespace(line, token?);
        private RecordRuleEdits(rule, t1, t2);
    }
}
declare var debugObjectHost: any;
declare module TypeScript.Services {
    interface ICoreServicesHost {
        logger: ILogger;
    }
    class CoreServices {
        public host: ICoreServicesHost;
        constructor(host: ICoreServicesHost);
        public getPreProcessedFileInfo(fileName: string, sourceText: IScriptSnapshot): IPreProcessedFileInfo;
        public getDefaultCompilationSettings(): CompilationSettings;
        public dumpMemory(): string;
        public getMemoryInfo(): any[];
        public collectGarbage(): void;
    }
}
declare module TypeScript.Services {
    class SyntaxTreeCache {
        private _host;
        private _hostCache;
        private _currentFileName;
        private _currentFileVersion;
        private _currentFileSyntaxTree;
        private _currentFileScriptSnapshot;
        constructor(_host: ILanguageServiceHost);
        public getCurrentFileSyntaxTree(fileName: string): SyntaxTree;
        private createSyntaxTree(fileName, scriptSnapshot);
        private updateSyntaxTree(fileName, scriptSnapshot, previousSyntaxTree, previousFileVersion);
        private ensureInvariants(fileName, editRange, incrementalTree, oldScriptSnapshot, newScriptSnapshot);
    }
    class LanguageServiceCompiler {
        private host;
        private logger;
        private compiler;
        private hostCache;
        constructor(host: ILanguageServiceHost);
        private synchronizeHostData();
        private synchronizeHostDataWorker();
        private tryUpdateFile(compiler, fileName);
        public getScriptSnapshot(fileName: string): IScriptSnapshot;
        public getCachedHostFileName(fileName: string): string;
        public getCachedTopLevelDeclaration(fileName: string): PullDecl;
        public compilationSettings(): ImmutableCompilationSettings;
        public fileNames(): string[];
        public cleanupSemanticCache(): void;
        public getDocument(fileName: string): Document;
        public getSyntacticDiagnostics(fileName: string): Diagnostic[];
        public getSemanticDiagnostics(fileName: string): Diagnostic[];
        public getCompilerOptionsDiagnostics(resolvePath: (path: string) => string): Diagnostic[];
        public getSymbolInformationFromAST(ast: AST, document: Document): PullSymbolInfo;
        public getCallInformationFromAST(ast: AST, document: Document): PullCallSymbolInfo;
        public getVisibleMemberSymbolsFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
        public getVisibleDeclsFromAST(ast: AST, document: Document): PullDecl[];
        public getContextualMembersFromAST(ast: AST, document: Document): PullVisibleSymbolsInfo;
        public pullGetDeclInformation(decl: PullDecl, ast: AST, document: Document): PullSymbolInfo;
        public topLevelDeclaration(fileName: string): PullDecl;
        public getDeclForAST(ast: AST): PullDecl;
        public emit(fileName: string, resolvePath: (path: string) => string): EmitOutput;
        public emitDeclarations(fileName: string, resolvePath: (path: string) => string): EmitOutput;
        public canEmitDeclarations(fileName: string): boolean;
    }
}
declare module TypeScript.Services {
    class CompletionHelpers {
        private static getSpan(ast);
        private static symbolDeclarationIntersectsPosition(symbol, fileName, position);
        static filterContextualMembersList(contextualMemberSymbols: PullSymbol[], existingMembers: PullVisibleSymbolsInfo, fileName: string, position: number): PullSymbol[];
        static isCompletionListBlocker(sourceUnit: SourceUnitSyntax, position: number): boolean;
        static getContainingObjectLiteralApplicableForCompletion(sourceUnit: SourceUnitSyntax, position: number): PositionedElement;
        static isIdentifierDefinitionLocation(sourceUnit: SourceUnitSyntax, position: number): boolean;
        static getNonIdentifierCompleteTokenOnLeft(sourceUnit: SourceUnitSyntax, position: number): PositionedToken;
        static isRightOfIllegalDot(sourceUnit: SourceUnitSyntax, position: number): boolean;
        static getValidCompletionEntryDisplayName(displayName: string): string;
    }
}
declare module TypeScript.Services {
    class KeywordCompletions {
        private static keywords;
        private static keywordCompletions;
        static getKeywordCompltions(): ResolvedCompletionEntry[];
    }
}
declare module TypeScript.Services {
    interface IPartiallyWrittenTypeArgumentListInformation {
        genericIdentifer: PositionedToken;
        lessThanToken: PositionedToken;
        argumentIndex: number;
    }
    class SignatureInfoHelpers {
        static isInPartiallyWrittenTypeArgumentList(syntaxTree: SyntaxTree, position: number): IPartiallyWrittenTypeArgumentListInformation;
        static getSignatureInfoFromSignatureSymbol(symbol: PullSymbol, signatures: PullSignatureSymbol[], enclosingScopeSymbol: PullSymbol, compilerState: LanguageServiceCompiler): FormalSignatureItemInfo[];
        static getSignatureInfoFromGenericSymbol(symbol: PullSymbol, enclosingScopeSymbol: PullSymbol, compilerState: LanguageServiceCompiler): FormalSignatureItemInfo[];
        static getActualSignatureInfoFromCallExpression(ast: ICallExpression, caretPosition: number, typeParameterInformation: IPartiallyWrittenTypeArgumentListInformation): ActualSignatureInfo;
        static getActualSignatureInfoFromPartiallyWritenGenericExpression(caretPosition: number, typeParameterInformation: IPartiallyWrittenTypeArgumentListInformation): ActualSignatureInfo;
        static isSignatureHelpBlocker(sourceUnit: SourceUnitSyntax, position: number): boolean;
        static isTargetOfObjectCreationExpression(positionedToken: PositionedToken): boolean;
        private static moveBackUpTillMatchingTokenKind(token, tokenKind, matchingTokenKind);
    }
}
declare module TypeScript.Services {
    interface CachedCompletionEntryDetails extends CompletionEntryDetails {
        isResolved(): boolean;
    }
    class ResolvedCompletionEntry implements CachedCompletionEntryDetails {
        public name: string;
        public kind: string;
        public kindModifiers: string;
        public type: string;
        public fullSymbolName: string;
        public docComment: string;
        constructor(name: string, kind: string, kindModifiers: string, type: string, fullSymbolName: string, docComment: string);
        public isResolved(): boolean;
    }
    class DeclReferenceCompletionEntry implements CachedCompletionEntryDetails {
        public name: string;
        public kind: string;
        public kindModifiers: string;
        public decl: PullDecl;
        public type: string;
        public fullSymbolName: string;
        public docComment: string;
        private hasBeenResolved;
        constructor(name: string, kind: string, kindModifiers: string, decl: PullDecl);
        public isResolved(): boolean;
        public resolve(type: string, fullSymbolName: string, docComments: string): void;
    }
    class CompletionSession {
        public fileName: string;
        public position: number;
        public entries: IdentiferNameHashTable<CachedCompletionEntryDetails>;
        constructor(fileName: string, position: number, entries: IdentiferNameHashTable<CachedCompletionEntryDetails>);
    }
}
declare module TypeScript.Services {
    class LanguageService implements ILanguageService {
        public host: ILanguageServiceHost;
        private logger;
        private compiler;
        private _syntaxTreeCache;
        private formattingRulesProvider;
        private activeCompletionSession;
        constructor(host: ILanguageServiceHost);
        public cleanupSemanticCache(): void;
        public refresh(): void;
        private getSymbolInfoAtPosition(fileName, pos, requireName);
        public getReferencesAtPosition(fileName: string, pos: number): ReferenceEntry[];
        private getSymbolScopeAST(symbol, ast);
        public getOccurrencesAtPosition(fileName: string, pos: number): ReferenceEntry[];
        private getSingleNodeReferenceAtPosition(fileName, position);
        public getImplementorsAtPosition(fileName: string, pos: number): ReferenceEntry[];
        public getOverrides(container: PullTypeSymbol, memberSym: PullSymbol): PullTypeSymbol[];
        private getImplementorsInFile(fileName, symbol);
        private getReferencesInFile(fileName, symbol, containingASTOpt);
        private isWriteAccess(current);
        private isLetterOrDigit(char);
        private getPossibleSymbolReferencePositions(fileName, symbolName);
        public getSignatureAtPosition(fileName: string, position: number): SignatureInfo;
        private getTypeParameterSignatureFromPartiallyWrittenExpression(document, position, genericTypeArgumentListInfo);
        public getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        private addDeclarations(symbolKind, symbolName, containerKind, containerName, declarations, result);
        private addDeclaration(symbolKind, symbolName, containerKind, containerName, declaration, result);
        private tryAddDefinition(symbolKind, symbolName, containerKind, containerName, declarations, result);
        private tryAddSignatures(symbolKind, symbolName, containerKind, containerName, declarations, result);
        private tryAddConstructor(symbolKind, symbolName, containerKind, containerName, declarations, result);
        public getNavigateToItems(searchValue: string): NavigateToItem[];
        private hasAnyUpperCaseCharacter(s);
        private findSearchValueInPullDecl(fileName, declarations, results, searchTerms, parentName?, parentkindName?);
        private getScriptElementKindModifiersFromDecl(decl);
        private isContainerDeclaration(declaration);
        private shouldIncludeDeclarationInNavigationItems(declaration);
        public getSyntacticDiagnostics(fileName: string): Diagnostic[];
        public getSemanticDiagnostics(fileName: string): Diagnostic[];
        private _getHostSpecificDiagnosticWithFileName(diagnostic);
        public getCompilerOptionsDiagnostics(): Diagnostic[];
        private _getHostFileName(fileName);
        public getEmitOutput(fileName: string): EmitOutput;
        private getAllSyntacticDiagnostics();
        private getAllSemanticDiagnostics();
        private containErrors(diagnostics);
        private getFullNameOfSymbol(symbol, enclosingScopeSymbol);
        private getTypeInfoEligiblePath(fileName, position, isConstructorValidPosition);
        public getTypeAtPosition(fileName: string, position: number): TypeInfo;
        public getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): CompletionInfo;
        private getCompletionEntriesFromSymbols(symbolInfo, result);
        private getCompletionEntriesFromDecls(decls, result);
        private getResolvedCompletionEntryDetailsFromSymbol(symbol, enclosingScopeSymbol);
        private getCompletionEntriesForKeywords(keywords, result);
        public getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        private tryFindDeclFromPreviousCompilerVersion(invalidatedDecl);
        private getModuleOrEnumKind(symbol);
        private mapPullElementKind(kind, symbol?, useConstructorAsClass?, varIsFunction?, functionIsConstructor?);
        private getScriptElementKindModifiers(symbol);
        private getScriptElementKindModifiersFromFlags(flags);
        public getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): SpanInfo;
        public getBreakpointStatementAtPosition(fileName: string, pos: number): SpanInfo;
        public getFormattingEditsForRange(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        public getFormattingEditsForDocument(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        public getFormattingEditsOnPaste(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
        public getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextEdit[];
        private getFormattingManager(fileName, options);
        public getOutliningRegions(fileName: string): TextSpan[];
        public getIndentationAtPosition(fileName: string, position: number, editorOptions: EditorOptions): number;
        public getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        public getScriptLexicalStructure(fileName: string): NavigateToItem[];
        public getSyntaxTree(fileName: string): SyntaxTree;
    }
}
declare module TypeScript.Services {
    class FindReferenceHelpers {
        static compareSymbolsForLexicalIdentity(firstSymbol: PullSymbol, secondSymbol: PullSymbol): boolean;
        private static checkSymbolsForDeclarationEquality(firstSymbol, secondSymbol);
        private static declarationsAreSameOrParents(firstDecl, secondDecl);
    }
}
declare module TypeScript.Services {
    interface IScriptSnapshotShim {
        getText(start: number, end: number): string;
        getLength(): number;
        getLineStartPositions(): string;
        getTextChangeRangeSinceVersion(scriptVersion: number): string;
    }
    interface ILanguageServiceShimHost extends ILogger {
        getCompilationSettings(): string;
        getScriptFileNames(): string;
        getScriptVersion(fileName: string): number;
        getScriptIsOpen(fileName: string): boolean;
        getScriptByteOrderMark(fileName: string): number;
        getScriptSnapshot(fileName: string): IScriptSnapshotShim;
        resolveRelativePath(path: string, directory: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        getParentDirectory(path: string): string;
        getDiagnosticsObject(): ILanguageServicesDiagnostics;
        getLocalizedDiagnosticMessages(): string;
    }
    interface IShimFactory {
        registerShim(shim: IShim): void;
        unregisterShim(shim: IShim): void;
    }
    interface IShim {
        dispose(dummy: any): void;
    }
    class ShimBase implements IShim {
        private factory;
        constructor(factory: IShimFactory);
        public dispose(dummy: any): void;
    }
    interface ILanguageServiceShim extends IShim {
        languageService: ILanguageService;
        dispose(dummy: any): void;
        refresh(throwOnError: boolean): void;
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): string;
        getSemanticDiagnostics(fileName: string): string;
        getCompilerOptionsDiagnostics(): string;
        getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): string;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): string;
        getTypeAtPosition(fileName: string, position: number): string;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): string;
        getBreakpointStatementAtPosition(fileName: string, position: number): string;
        getSignatureAtPosition(fileName: string, position: number): string;
        getDefinitionAtPosition(fileName: string, position: number): string;
        getReferencesAtPosition(fileName: string, position: number): string;
        getOccurrencesAtPosition(fileName: string, position: number): string;
        getImplementorsAtPosition(fileName: string, position: number): string;
        getNavigateToItems(searchValue: string): string;
        getScriptLexicalStructure(fileName: string): string;
        getOutliningRegions(fileName: string): string;
        getBraceMatchingAtPosition(fileName: string, position: number): string;
        getIndentationAtPosition(fileName: string, position: number, options: string): string;
        getFormattingEditsForRange(fileName: string, minChar: number, limChar: number, options: string): string;
        getFormattingEditsForDocument(fileName: string, minChar: number, limChar: number, options: string): string;
        getFormattingEditsOnPaste(fileName: string, minChar: number, limChar: number, options: string): string;
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: string): string;
        getEmitOutput(fileName: string): string;
    }
    class LanguageServiceShimHostAdapter implements ILanguageServiceHost {
        private shimHost;
        constructor(shimHost: ILanguageServiceShimHost);
        public information(): boolean;
        public debug(): boolean;
        public warning(): boolean;
        public error(): boolean;
        public fatal(): boolean;
        public log(s: string): void;
        public getCompilationSettings(): CompilationSettings;
        public getScriptFileNames(): string[];
        public getScriptSnapshot(fileName: string): IScriptSnapshot;
        public getScriptVersion(fileName: string): number;
        public getScriptIsOpen(fileName: string): boolean;
        public getScriptByteOrderMark(fileName: string): ByteOrderMark;
        public getDiagnosticsObject(): ILanguageServicesDiagnostics;
        public getLocalizedDiagnosticMessages(): any;
        public resolveRelativePath(path: string, directory: string): string;
        public fileExists(path: string): boolean;
        public directoryExists(path: string): boolean;
        public getParentDirectory(path: string): string;
    }
    function simpleForwardCall(logger: ILogger, actionDescription: string, action: () => any): any;
    function forwardJSONCall(logger: ILogger, actionDescription: string, action: () => any): string;
    class LanguageServiceShim extends ShimBase implements ILanguageServiceShim {
        private host;
        public languageService: ILanguageService;
        private logger;
        constructor(factory: IShimFactory, host: ILanguageServiceShimHost, languageService: ILanguageService);
        public forwardJSONCall(actionDescription: string, action: () => any): string;
        public dispose(dummy: any): void;
        public refresh(throwOnError: boolean): void;
        public cleanupSemanticCache(): void;
        private static realizeDiagnosticCategory(category);
        private static realizeDiagnostic(diagnostic);
        private realizeDiagnosticWithFileName(diagnostic);
        public getSyntacticDiagnostics(fileName: string): string;
        public getSemanticDiagnostics(fileName: string): string;
        public getCompilerOptionsDiagnostics(): string;
        public getTypeAtPosition(fileName: string, position: number): string;
        public getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): string;
        public getBreakpointStatementAtPosition(fileName: string, position: number): string;
        public getSignatureAtPosition(fileName: string, position: number): string;
        public getDefinitionAtPosition(fileName: string, position: number): string;
        public getBraceMatchingAtPosition(fileName: string, position: number): string;
        public getIndentationAtPosition(fileName: string, position: number, options: string): string;
        public getReferencesAtPosition(fileName: string, position: number): string;
        public getOccurrencesAtPosition(fileName: string, position: number): string;
        public getImplementorsAtPosition(fileName: string, position: number): string;
        public getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): string;
        public getCompletionEntryDetails(fileName: string, position: number, entryName: string): string;
        public getFormattingEditsForRange(fileName: string, minChar: number, limChar: number, options: string): string;
        public getFormattingEditsForDocument(fileName: string, minChar: number, limChar: number, options: string): string;
        public getFormattingEditsOnPaste(fileName: string, minChar: number, limChar: number, options: string): string;
        public getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: string): string;
        public getNavigateToItems(searchValue: string): string;
        public getScriptLexicalStructure(fileName: string): string;
        public getOutliningRegions(fileName: string): string;
        public getEmitOutput(fileName: string): string;
        private _navigateToItemsToString(items);
    }
    class ClassifierShim extends ShimBase {
        public host: IClassifierHost;
        public classifier: Classifier;
        constructor(factory: IShimFactory, host: IClassifierHost);
        public getClassificationsForLine(text: string, lexState: EndOfLineState): string;
    }
    class CoreServicesShim extends ShimBase {
        public host: ICoreServicesHost;
        public logger: ILogger;
        public services: CoreServices;
        constructor(factory: IShimFactory, host: ICoreServicesHost);
        private forwardJSONCall(actionDescription, action);
        public getPreProcessedFileInfo(fileName: string, sourceText: IScriptSnapshot): string;
        public getDefaultCompilationSettings(): string;
        public dumpMemory(dummy: any): string;
        public getMemoryInfo(dummy: any): string;
    }
}
declare module TypeScript.Services {
    class OutliningElementsCollector extends DepthLimitedWalker {
        private static MaximumDepth;
        private inObjectLiteralExpression;
        private elements;
        constructor();
        public visitClassDeclaration(node: ClassDeclarationSyntax): void;
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): void;
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): void;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): void;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): void;
        public visitFunctionExpression(node: FunctionExpressionSyntax): void;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): void;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): void;
        public visitGetAccessor(node: GetAccessorSyntax): void;
        public visitSetAccessor(node: SetAccessorSyntax): void;
        public visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): void;
        private addOutlineRange(node, startElement, endElement);
        static collectElements(node: SourceUnitSyntax): TextSpan[];
    }
}
declare module TypeScript.Services {
    class Indenter {
        static getIndentation(node: SourceUnitSyntax, soruceText: IScriptSnapshot, position: number, editorOptions: EditorOptions): number;
        private static belongsToBracket(sourceText, token, position);
        private static isInContainerNode(parent, element);
        private static getCustomListIndentation(list, element);
        private static getListItemIndentation(list, elementIndex);
    }
}
declare module TypeScript.Services.Breakpoints {
    function getBreakpointLocation(syntaxTree: SyntaxTree, askedPos: number): SpanInfo;
}
declare module TypeScript.Services {
    class GetScriptLexicalStructureWalker extends PositionTrackingWalker {
        private fileName;
        private nameStack;
        private kindStack;
        private currentMemberVariableDeclaration;
        private currentVariableStatement;
        private currentInterfaceDeclaration;
        private parentScopes;
        private currentScope;
        private createScope();
        private pushNewContainerScope(containerName, kind);
        private popScope();
        constructor(fileName: string);
        private collectItems(items, scope?);
        static getListsOfAllScriptLexicalStructure(items: NavigateToItem[], fileName: string, unit: SourceUnitSyntax): void;
        private createItem(node, modifiers, kind, name);
        private addAdditionalSpan(node, key);
        private getKindModifiers(modifiers);
        public visitModuleDeclaration(node: ModuleDeclarationSyntax): void;
        private visitModuleDeclarationWorker(node, names, nameIndex);
        private getModuleNames(node);
        private getModuleNamesHelper(name, result);
        public visitClassDeclaration(node: ClassDeclarationSyntax): void;
        public visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): void;
        public visitObjectType(node: ObjectTypeSyntax): void;
        public visitEnumDeclaration(node: EnumDeclarationSyntax): void;
        public visitConstructorDeclaration(node: ConstructorDeclarationSyntax): void;
        public visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): void;
        public visitGetAccessor(node: GetAccessorSyntax): void;
        public visitSetAccessor(node: SetAccessorSyntax): void;
        public visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): void;
        public visitVariableStatement(node: VariableStatementSyntax): void;
        public visitVariableDeclarator(node: VariableDeclaratorSyntax): void;
        public visitIndexSignature(node: IndexSignatureSyntax): void;
        public visitEnumElement(node: EnumElementSyntax): void;
        public visitCallSignature(node: CallSignatureSyntax): void;
        public visitConstructSignature(node: ConstructSignatureSyntax): void;
        public visitMethodSignature(node: MethodSignatureSyntax): void;
        public visitPropertySignature(node: PropertySignatureSyntax): void;
        public visitFunctionDeclaration(node: FunctionDeclarationSyntax): void;
        public visitBlock(node: BlockSyntax): void;
        public visitIfStatement(node: IfStatementSyntax): void;
        public visitExpressionStatement(node: ExpressionStatementSyntax): void;
        public visitThrowStatement(node: ThrowStatementSyntax): void;
        public visitReturnStatement(node: ReturnStatementSyntax): void;
        public visitSwitchStatement(node: SwitchStatementSyntax): void;
        public visitWithStatement(node: WithStatementSyntax): void;
        public visitTryStatement(node: TryStatementSyntax): void;
        public visitLabeledStatement(node: LabeledStatementSyntax): void;
    }
}
declare module TypeScript.Services {
    function copyDataObject(dst: any, src: any): any;
    class TypeScriptServicesFactory implements IShimFactory {
        private _shims;
        public createPullLanguageService(host: ILanguageServiceHost): ILanguageService;
        public createLanguageServiceShim(host: ILanguageServiceShimHost): ILanguageServiceShim;
        public createClassifier(host: IClassifierHost): Classifier;
        public createClassifierShim(host: IClassifierHost): ClassifierShim;
        public createCoreServices(host: ICoreServicesHost): CoreServices;
        public createCoreServicesShim(host: ICoreServicesHost): CoreServicesShim;
        public close(): void;
        public registerShim(shim: IShim): void;
        public unregisterShim(shim: IShim): void;
    }
}
declare module TypeScript.Services {
    class BraceMatcher {
        static getMatchSpans(syntaxTree: SyntaxTree, position: number): TextSpan[];
        private static getMatchingCloseBrace(currentToken, position, result);
        private static getMatchingOpenBrace(currentToken, position, result);
        private static getMatchingCloseBraceTokenKind(positionedElement);
        private static getMatchingOpenBraceTokenKind(positionedElement);
    }
}

declare module 'typescript-services' {
    export = TypeScript;
}
