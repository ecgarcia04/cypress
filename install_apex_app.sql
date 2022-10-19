CREATE OR REPLACE PROCEDURE APEX_AUTO_DEPLOY.install_apex_app(p_app_id NUMBER) IS

v_workspace_id NUMBER;

BEGIN

 select w.workspace_id into v_workspace_id
 from apex_workspaces w,
      apex_applications a
 where w.workspace = a.workspace
 and a.application_id = p_app_id;
 
  apex_application_install.set_workspace_id(v_workspace_id);
  apex_application_install.set_application_id(p_app_id);
  apex_application_install.generate_offset;
  apex_application_install.set_application_alias('F'||apex_application_install.get_application_id);
  EXCEPTION 
    WHEN OTHERS THEN RAISE;
END install_apex_app;
