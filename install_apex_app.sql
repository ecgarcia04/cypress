CREATE OR REPLACE PROCEDURE APEX_AUTO_DEPLOY.install_apex_app(p_app_id NUMBER) IS

BEGIN
  apex_application_install.set_application_id(p_app_id);
  apex_application_install.generate_offset;
  apex_application_install.set_application_alias('F'||apex_application_install.get_application_id);
  EXCEPTION 
    WHEN OTHERS THEN RAISE;
END install_apex_app;